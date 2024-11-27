document.addEventListener('DOMContentLoaded', () => {
    // تمييز الرابط النشط بناءً على الصفحة الحالية
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.top-nav a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // تبديل الوضع المظلم
    const darkModeIcon = document.getElementById('toggle-dark-mode');
    darkModeIcon.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
    });

    // تبديل اللغة
    const languageIcon = document.getElementById('toggle-language');
    let isEnglish = false;

    languageIcon.addEventListener('click', () => {
        if (isEnglish) {
            translatePage('ar');
            isEnglish = false;
        } else {
            translatePage('en');
            isEnglish = true;
        }
    });

    // دالة الترجمة
    const translatePage = (lang) => {
        const translations = {
            ar: {
                "مرحبًا بك في موقع ببساطة - عالم الكود العربي! 💻✨": "Welcome to Simply - The Arabic Code World! 💻✨",
                "الأقسام": "Sections",
                "أساسيات البرمجة": "Programming Basics",
                "تم إعداد هذه الدورة بعناية لتعليم أسس البرمجة للمبتدئين بشكل تفاعلي خالي من أي تعقيد.":
                "This course is carefully prepared to teach the basics of programming interactively without any complexity.",
                "قواعد البيانات": "Databases",
                "سلسلة من المفاهيم والدروس الشاملة لقواعد البيانات.":
                "A series of comprehensive concepts and lessons on databases.",
                "HTML": "HTML",
                "لغة تستخدم في إنشاء صفحات الويب لتعيين العناصر التي سيتم وضعها.":
                "A language used to create web pages by defining the elements to be placed.",
                "CSS": "CSS",
                "تعلم كيفية تنسيق صفحات الويب باستخدام CSS لتحسين التصميم.":
                "Learn how to style web pages using CSS to enhance design.",
                "جافاسكريبت": "JavaScript",
                "لغة برمجة تتيح لك إنشاء محتوى ديناميكي على صفحات الويب.":
                "A programming language that allows you to create dynamic content on web pages.",
                "React": "React",
                "مكتبة جافاسكريبت لبناء واجهات مستخدم تفاعلية.":
                "A JavaScript library for building interactive user interfaces.",
                "Python": "Python",
                "لغة برمجة يمكن استخدامها في مجالات متعددة مثل (التطبيقات-الألعاب-المواقع-أيضًا مهمة في الاختراق)":
                "A programming language used in various fields such as applications, games, websites, and hacking.",
                "C++": "C++",
                "تُستخدم في تطوير أنظمة التشغيل، تطوير ألعاب الفيديو، برمجة الأنظمة المدمجة، وإنشاء تطبيقات سطح المكتب.":
                "Used in developing operating systems, video games, embedded systems, and desktop applications.",
                "Java": "Java",
                "تُستخدم في تطوير تطبيقات الويب، بناء تطبيقات الأجهزة المحمولة (خاصة Android)، وتطوير الأنظمة الكبيرة والموزعة.":
                "Used in web application development, mobile app development (especially Android), and building large-scale distributed systems.",
                "Algorithms": "Algorithms",
                "تستخدم في حل المشكلات الرياضية والمعقدة، تحسين أداء البرامج، وتحسين الذكاء الاصطناعي والتعلم الآلي.":
                "Used in solving mathematical and complex problems, improving software performance, and enhancing AI and machine learning.",
                "هدف الموقع": "Site Goal",
                "معًا نحو مستقبل رقمي أكثر إبداعًا! 💻✨": "Together towards a more creative digital future! 💻✨",
                "جميع الحقوق محفوظة - موقع ببساطة.": "All rights reserved - Simply Website."
            },
            en: {
                "Welcome to Simply - The Arabic Code World! 💻✨": "مرحبًا بك في موقع ببساطة - عالم الكود العربي! 💻✨",
                "Sections": "الأقسام",
                "Programming Basics": "أساسيات البرمجة",
                "This course is carefully prepared to teach the basics of programming interactively without any complexity.":
                "تم إعداد هذه الدورة بعناية لتعليم أسس البرمجة للمبتدئين بشكل تفاعلي خالي من أي تعقيد.",
                "Databases": "قواعد البيانات",
                "A series of comprehensive concepts and lessons on databases.":
                "سلسلة من المفاهيم والدروس الشاملة لقواعد البيانات.",
                "HTML": "HTML",
                "A language used to create web pages by defining the elements to be placed.":
                "لغة تستخدم في إنشاء صفحات الويب لتعيين العناصر التي سيتم وضعها.",
                "CSS": "CSS",
                "Learn how to style web pages using CSS to enhance design.":
                "تعلم كيفية تنسيق صفحات الويب باستخدام CSS لتحسين التصميم.",
                "JavaScript": "جافاسكريبت",
                "A programming language that allows you to create dynamic content on web pages.":
                "لغة برمجة تتيح لك إنشاء محتوى ديناميكي على صفحات الويب.",
                "React": "React",
                "A JavaScript library for building interactive user interfaces.":
                "مكتبة جافاسكريبت لبناء واجهات مستخدم تفاعلية.",
                "Python": "Python",
                "A programming language used in various fields such as applications, games, websites, and hacking.":
                "لغة برمجة يمكن استخدامها في مجالات متعددة مثل (التطبيقات-الألعاب-المواقع-أيضًا مهمة في الاختراق)",
                "C++": "C++",
                "Used in developing operating systems, video games, embedded systems, and desktop applications.":
                "تُستخدم في تطوير أنظمة التشغيل، تطوير ألعاب الفيديو، برمجة الأنظمة المدمجة، وإنشاء تطبيقات سطح المكتب.",
                "Java": "Java",
                "Used in web application development, mobile app development (especially Android), and building large-scale distributed systems.":
                "تُستخدم في تطوير تطبيقات الويب، بناء تطبيقات الأجهزة المحمولة (خاصة Android)، وتطوير الأنظمة الكبيرة والموزعة.",
                "Algorithms": "Algorithms",
                "Used in solving mathematical and complex problems, improving software performance, and enhancing AI and machine learning.":
                "تستخدم في حل المشكلات الرياضية والمعقدة، تحسين أداء البرامج، وتحسين الذكاء الاصطناعي والتعلم الآلي.",
                "Site Goal": "هدف الموقع",
                "Together towards a more creative digital future! 💻✨": "معًا نحو مستقبل رقمي أكثر إبداعًا! 💻✨",
                "All rights reserved - Simply Website.": "جميع الحقوق محفوظة - موقع ببساطة."
            }
        };

        // تطبيق الترجمة
        const selectedTranslations = translations[lang];

        const translateText = (element) => {
            if (element.nodeType === Node.TEXT_NODE) {
                const trimmedText = element.textContent.trim();
                if (selectedTranslations[trimmedText]) {
                    element.textContent = selectedTranslations[trimmedText];
                }
            } else {
                element.childNodes.forEach(translateText);
            }
        };

        document.body.childNodes.forEach(translateText);
    };

    // تبديل القائمة عند الضغط على زر القائمة
    const menuIcon = document.getElementById('menu-icon');
    menuIcon.addEventListener('click', () => {
        const nav = document.getElementById('top-nav');
        nav.classList.toggle('active');
        menuIcon.classList.toggle('change');
    });
});
