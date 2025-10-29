document.addEventListener('DOMContentLoaded', () => {

    // --- NAVIGASI MOBILE ---
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));

    // --- MODAL DETAIL PERANGKAT ---
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const closeBtn = document.querySelector('.close-btn');
    const cards = document.querySelectorAll('.card');

    const deviceDetails = {
        router: {
            title: "Router",
            description: "Router adalah perangkat yang meneruskan paket data antara jaringan komputer. Router bekerja pada lapisan jaringan (Layer 3) dari model OSI. Fungsi utamanya adalah menghubungkan dua atau lebih jaringan yang berbeda, seperti jaringan lokal (LAN) Anda dengan internet. Router membaca alamat IP pada paket data untuk menentukan rute terbaik untuk mengirimkannya ke tujuan akhir. Analoginya: router seperti seorang petugas pos di persimpangan jalan raya yang mengarahkan surat ke alamat yang benar."
        },
        switch: {
            title: "Network Switch",
            description: "Switch adalah perangkat jaringan yang menghubungkan beberapa perangkat dalam satu jaringan area lokal (LAN). Berbeda dengan hub yang mengirim data ke semua perangkat, switch cerdas karena hanya mengirim data ke perangkat tujuan yang spesifik. Ini dilakukan dengan menggunakan tabel alamat MAC untuk mengidentifikasi perangkat yang terhubung ke setiap portnya. Analoginya: switch seperti operator telepon manual yang menghubungkan panggilan langsung ke orang yang tepat, bukan ke semua orang di kantor."
        },
        modem: {
            title: "Modem (Modulator-Demodulator)",
            description: "Modem adalah perangkat keras yang mengubah sinyal digital dari komputer Anda menjadi sinyal analog yang dapat ditransmisikan melalui saluran telepon atau kabel koaksial, dan sebaliknya. Ini adalah jembatan penting antara perangkat Anda dan Internet Service Provider (ISP). Tanpa modem, komputer Anda tidak dapat 'berbicara' dengan infrastruktur internet yang lebih besar. Analoginya: modem seperti penerjemah antara bahasa komputer (digital) dan bahasa jalur telepon/kabel (analog)."
        },
        'access-point': {
            title: "Access Point (AP)",
            description: "Access Point adalah perangkat jaringan yang menciptakan jaringan nirkabel (Wi-Fi). AP terhubung ke router (atau switch) melalui kabel Ethernet, lalu memancarkan sinyal Wi-Fi sehingga perangkat seperti laptop, smartphone, dan tablet dapat terhubung ke jaringan. Banyak router rumahan modern memiliki fungsi Access Point yang terintegrasi. Analoginya: AP seperti lampu yang mengubah listrik (kabel) menjadi cahaya (sinyal Wi-Fi) yang bisa menjangkau seluruh ruangan."
        },
        repeater: {
            title: "Repeater / Range Extender",
            description: "Repeater, atau yang sering disebut Range Extender, adalah perangkat yang menerima sinyal Wi-Fi yang ada, memperkuatnya, lalu memancarkannya kembali. Tujuannya adalah untuk memperluas jangkauan jaringan Wi-Fi Anda ke area yang sebelumnya tidak terjangkau atau memiliki sinyal lemah. Analoginya: repeater seperti cermin yang memantulkan cahaya dari sumber utama ke area yang lebih gelap."
        },
        firewall: {
            title: "Firewall",
            description: "Firewall adalah sistem keamanan jaringan yang memantau dan mengontrol lalu lintas jaringan masuk dan keluar berdasarkan aturan keamanan yang telah ditentukan. Tujuan utamanya adalah untuk membuat penghalang antara jaringan internal yang aman dan jaringan eksternal yang tidak tepercaya (seperti internet). Firewall bisa berupa perangkat keras atau perangkat lunak. Analoginya: firewall seperti penjaga keamanan di pintu gerbang sebuah gedung yang memeriksa identitas setiap orang yang masuk dan keluar."
        }
    };

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const deviceKey = card.getAttribute('data-device');
            const details = deviceDetails[deviceKey];
            if (details) {
                modalTitle.textContent = details.title;
                modalDescription.textContent = details.description;
                modal.style.display = 'block';
            }
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });


    // --- LOGIKA KUIS ---
    const questions = [
        {
            question: "Perangkat mana yang berfungsi sebagai 'polisi lalu lintas' untuk mengarahkan data antar jaringan yang berbeda?",
            answers: [
                { text: "Switch", correct: false },
                { text: "Router", correct: true },
                { text: "Modem", correct: false },
                { text: "Repeater", correct: false }
            ]
        },
        {
            question: "Apa fungsi utama dari sebuah Access Point?",
            answers: [
                { text: "Memperkuat sinyal kabel", correct: false },
                { text: "Menghubungkan jaringan LAN ke internet", correct: false },
                { text: "Menciptakan jaringan Wi-Fi", correct: true },
                { text: "Memblokir lalu lintas berbahaya", correct: false }
            ]
        },
        {
            question: "Perangkat mana yang bekerja dengan menggunakan alamat MAC untuk mengirim data ke perangkat tujuan yang spesifik dalam satu LAN?",
            answers: [
                { text: "Router", correct: false },
                { text: "Firewall", correct: false },
                { text: "Modem", correct: false },
                { text: "Switch", correct: true }
            ]
        },
        {
            question: "Jika sinyal Wi-Fi di kamar Anda sangat lemah, perangkat mana yang paling cocok untuk memperbaikinya?",
            answers: [
                { text: "Firewall", correct: false },
                { text: "Repeater", correct: true },
                { text: "Modem", correct: false },
                { text: "Access Point", correct: false }
            ]
        },
        {
            question: "Perangkat apa yang bertindak sebagai penerjemah antara sinyal digital komputer dan sinyal analog dari ISP?",
            answers: [
                { text: "Modem", correct: true },
                { text: "Switch", correct: false },
                { text: "Router", correct: false },
                { text: "Hub", correct: false }
            ]
        }
    ];

    const questionElement = document.getElementById("question");
    const answerButtonsElement = document.getElementById("answer-buttons");
    const nextButton = document.getElementById("next-btn");
    const progressBar = document.getElementById("progress");

    let currentQuestionIndex = 0;
    let score = 0;

    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        nextButton.innerHTML = "Lanjut";
        nextButton.classList.add("hide");
        showQuestion();
    }

    function showQuestion() {
        resetState();
        let currentQuestion = questions[currentQuestionIndex];
        let questionNo = currentQuestionIndex + 1;
        questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

        currentQuestion.answers.forEach(answer => {
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("btn-answer");
            answerButtonsElement.appendChild(button);
            if (answer.correct) {
                button.dataset.correct = answer.correct;
            }
            button.addEventListener("click", selectAnswer);
        });

        updateProgressBar();
    }

    function resetState() {
        nextButton.classList.add("hide");
        while (answerButtonsElement.firstChild) {
            answerButtonsElement.removeChild(answerButtonsElement.firstChild);
        }
    }
    
    function selectAnswer(e) {
        const selectedBtn = e.target;
        const isCorrect = selectedBtn.dataset.correct === "true";

        if (isCorrect) {
            selectedBtn.classList.add("correct");
            score++;
        } else {
            selectedBtn.classList.add("incorrect");
        }

        Array.from(answerButtonsElement.children).forEach(button => {
            if (button.dataset.correct === "true") {
                button.classList.add("correct");
            }
            button.disabled = true;
        });
        nextButton.classList.remove("hide");
    }

    function updateProgressBar() {
        const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
        progressBar.style.width = progress + '%';
    }

    function showScore() {
        resetState();
        questionElement.innerHTML = `Skor Anda ${score} dari ${questions.length}!`;
        nextButton.innerHTML = "Main Lagi";
        nextButton.classList.remove("hide");
        progressBar.style.width = '100%';
    }

    function handleNextButton() {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showScore();
        }
    }

    nextButton.addEventListener("click", () => {
        if (currentQuestionIndex < questions.length) {
            handleNextButton();
        } else {
            startQuiz();
        }
    });

    startQuiz();

});