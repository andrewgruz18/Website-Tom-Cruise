document.addEventListener('DOMContentLoaded', function() {
    try {
        
        let counter = parseInt(localStorage.getItem('hitCounter')) || 0;
        counter++;
        localStorage.setItem('hitCounter', counter);
        const counterElement = document.querySelector('#hit-counter');
        if (counterElement) {
            counterElement.textContent = counter;
            console.log('Counter updated:', counter);
        } else {
            console.error('Counter element #hit-counter not found');
        }

        
        const translations = {
            lv: {
                heroTitle: 'Izpētiet Toma Krūza pasauli!',
                heroSubtitle: 'Atklājiet stāstu par vienu no visu laiku izcilākajiem aktieriem un viņa neticamo karjeru.',
                bioTitle: 'Biogrāfija',
                galleryTitle: 'Interaktīvā galerija',
                contactTitle: 'Sazinieties!',
                formName: 'Vārds',
                formEmail: 'E-pasts',
                formMessage: 'Ziņojums',
                submitButton: 'Nosūtīt',
                modalClose: 'Aizvērt',
                visitCount: 'Apmeklējumu skaits: ',
                caption1: '2019. gads: Toms Krūzs Comic-Con, reklamējot ‘Top Gun: Maverick’',
                caption2: '2016. gads: Krūzs uz sarkanā paklāja, reklamē ‘Jack Reacher: Never Go Back’',
                caption3: '2018. gads: Aizkulises no ‘Mission: Impossible – Fallout’ filmēšanas',
                caption4: '2012. gads: Krūzs Stokholmā, reklamējot ‘Rock of Ages’',
                caption5: '2008. gads: Krūzs Berlīnē, reklamējot ‘Valkyrie’',
                caption6: '2009. gads: Krūzs Parīzē, svinot ‘Mission: Impossible’ franšīzi',
                caption7: '2010. gads: Krūzs Japānā, reklamējot ‘Knight and Day’',
                caption8: '2017. gads: Krūzs Londonā, reklamējot ‘The Mummy’',
                caption9: '2014. gads: Krūzs filmē ‘Edge of Tomorrow’ reklāmas kampaņu',
                caption10: '2018. gads: Krūzs Sanfrancisko, svinot ‘Mission: Impossible – Fallout’ panākumus'
            },
            en: {
                heroTitle: 'Explore Tom Cruise’s World!',
                heroSubtitle: 'Discover the story of one of the greatest actors of all time and his incredible career.',
                bioTitle: 'Biography',
                galleryTitle: 'Interactive Gallery',
                contactTitle: 'Contact Us',
                formName: 'Name',
                formEmail: 'Email',
                formMessage: 'Message',
                submitButton: 'Send',
                modalClose: 'Close',
                visitCount: 'Visit Count: ',
                caption1: '2019: Tom Cruise at Comic-Con, promoting ‘Top Gun: Maverick’',
                caption2: '2016: Cruise on the red carpet, promoting ‘Jack Reacher: Never Go Back’',
                caption3: '2018: Behind the scenes of ‘Mission: Impossible – Fallout’',
                caption4: '2012: Cruise in Stockholm, promoting ‘Rock of Ages’',
                caption5: '2008: Cruise in Berlin, promoting ‘Valkyrie’',
                caption6: '2009: Cruise in Paris, celebrating the ‘Mission: Impossible’ franchise',
                caption7: '2010: Cruise in Japan, promoting ‘Knight and Day’',
                caption8: '2017: Cruise in London, promoting ‘The Mummy’',
                caption9: '2014: Cruise filming the ‘Edge of Tomorrow’ promotional campaign',
                caption10: '2018: Cruise in San Francisco, celebrating the success of ‘Mission: Impossible – Fallout’'
            },
            ru: {
                heroTitle: 'Исследуйте мир Тома Круза!',
                heroSubtitle: 'Откройте историю одного из величайших актёров всех времён и его невероятную карьеру.',
                bioTitle: 'Биография',
                galleryTitle: 'Интерактивная галерея',
                contactTitle: 'Связаться с нами',
                formName: 'Имя',
                formEmail: 'Электронная почта',
                formMessage: 'Сообщение',
                submitButton: 'Отправить',
                modalClose: 'Закрыть',
                visitCount: 'Количество посещений: ',
                caption1: '2019 год: Том Круз на Comic-Con, продвигающий «Лучший стрелок: Маверик»',
                caption2: '2016 год: Круз на красной дорожке, продвигающий «Джек Ричер 2»',
                caption3: '2018 год: За кулисами съёмок «Миссия невыполнимая: Последствия»',
                caption4: '2012 год: Круз в Стокгольме, продвигающий «Рок на века»',
                caption5: '2008 год: Круз в Берлине, продвигающий «Операция Валькирия»',
                caption6: '2009 год: Круз в Париже, празднующий франшизу «Миссия невыполнимая»',
                caption7: '2010 год: Круз в Японии, продвигающий «Рыцарь дня»',
                caption8: '2017 год: Круз в Лондоне, продвигающий «Мумию»',
                caption9: '2014 год: Круз на съёмках рекламной кампании «Грань будущего»',
                caption10: '2018 год: Круз в Сан-Франциско, празднующий успех «Миссия невыполнимая – Последствия»'
            }
        };

     
        function updateLanguage(lang) {
            try {
                console.log('Switching language to:', lang);

             
                const textElements = document.querySelectorAll('.lang-text');
                console.log('Found .lang-text elements:', textElements.length);
                textElements.forEach(el => {
                    const key = el.getAttribute('data-key');
                    if (key && translations[lang] && translations[lang][key]) {
                        el.textContent = translations[lang][key];
                    }
                });
                const langBlocks = document.querySelectorAll('.lang-lv, .lang-en, .lang-ru');
                console.log('Found language blocks:', langBlocks.length);
                langBlocks.forEach(el => {
                    el.style.display = el.classList.contains(`lang-${lang}`) ? 'block' : 'none';
                });

              
                const nameInput = document.getElementById('name');
                const emailInput = document.getElementById('email');
                const messageInput = document.getElementById('message');
                if (nameInput) nameInput.placeholder = translations[lang].formName;
                if (emailInput) emailInput.placeholder = translations[lang].formEmail;
                if (messageInput) messageInput.placeholder = translations[lang].formMessage;

          
                const galleryItems = document.querySelectorAll('.gallery-item');
                console.log('Found gallery items:', galleryItems.length);
                galleryItems.forEach(item => {
                    const caption = item.getAttribute(`data-caption-${lang}`);
                    const captionEl = item.querySelector('.caption');
                    if (caption && captionEl) {
                        captionEl.textContent = caption;
                    }
                });
            } catch (error) {
                console.error('Error in updateLanguage:', error);
            }
        }

   
        const languageSelector = document.getElementById('language');
        if (languageSelector) {
            console.log('Language selector found, value:', languageSelector.value);
            languageSelector.addEventListener('change', (event) => {
                updateLanguage(event.target.value);
            });
            updateLanguage(languageSelector.value || 'lv');
        } else {
            console.error('Language selector not found');
        }

   
        const form = document.getElementById('contact-form');
        if (form) {
            form.addEventListener('submit', function(event) {
                try {
                    event.preventDefault();
                    const name = document.getElementById('name').value;
                    const email = document.getElementById('email').value;
                    const message = document.getElementById('message').value;
                    const lang = languageSelector ? languageSelector.value : 'lv';

                    if (name && email && message) {
                        Email.send({
                            Host: 'smtp.elasticemail.com',
                            Username: 'andrejsgruzbardis@gmail.com',
                            Password: 'YOUR_EMAIL_API_KEY',
                            To: 'andrejsgruzbardis@gmail.com',
                            From: email,
                            Subject: `New Message from ${name}`,
                            Body: `Name: ${name}<br>Email: ${email}<br>Message: ${message}`
                        }).then(() => {
                            alert(translations[lang].submitButton === 'Nosūtīt' ? 'Ziņojums nosūtīts!' :
                                  translations[lang].submitButton === 'Send' ? 'Message sent!' : 'Сообщение отправлено!');
                            form.reset();
                        }).catch(error => {
                            console.error('Email send error:', error);
                            alert(translations[lang].submitButton === 'Nosūtīt' ? 'Kļūda: ziņojums netika nosūtīts!' :
                                  translations[lang].submitButton === 'Send' ? 'Error: Message not sent!' : 'Ошибка: сообщение не отправлено!');
                        });
                    } else {
                        alert(translations[lang].submitButton === 'Nosūtīt' ? 'Lūdzu, aizpildiet visus laukus!' :
                              translations[lang].submitButton === 'Send' ? 'Please fill out all fields!' : 'Пожалуйста, заполните все поля!');
                    }
                } catch (error) {
                    console.error('Error in form submission:', error);
                }
            });
        } else {
            console.error('Contact form not found');
        }

    
        const modal = document.getElementById('gallery-modal');
        const modalImage = document.getElementById('modal-image');
        const modalCaption = document.getElementById('modal-text');
        const modalClose = document.querySelector('.modal-close');

        if (modal) {
            document.querySelectorAll('.gallery-item').forEach(item => {
                item.addEventListener('click', () => {
                    try {
                        const imgSrc = item.querySelector('img').src;
                        const lang = languageSelector ? languageSelector.value : 'lv';
                        const caption = item.getAttribute(`data-caption-${lang}`);
                        modalImage.src = imgSrc;
                        modalCaption.textContent = caption || '';
                        modal.style.display = 'block';
                        console.log('Modal opened with image:', imgSrc);
                    } catch (error) {
                        console.error('Error opening modal:', error);
                    }
                });
            });

            if (modalClose) {
                modalClose.addEventListener('click', () => {
                    modal.style.display = 'none';
                    console.log('Modal closed');
                });
            }

            modal.addEventListener('click', (event) => {
                if (event.target === modal) {
                    modal.style.display = 'none';
                    console.log('Modal closed by clicking outside');
                }
            });
        } else {
            console.error('Modal not found');
        }
    } catch (error) {
        console.error('Error in DOMContentLoaded:', error);
    }
});