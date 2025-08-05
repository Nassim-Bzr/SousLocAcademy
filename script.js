// Script pour la landing page Sous-Loc Academy

document.addEventListener('DOMContentLoaded', function() {
    
    // Gestion du formulaire de réservation
    const bookingForm = document.querySelector('.booking-form');
    const continueBtn = document.querySelector('.continue-btn');
    const phoneInput = document.querySelector('.phone-input input');
    const nameInput = document.querySelector('input[type="text"]');
    
    // Gestion de la soumission du formulaire
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validation simple
            const phone = phoneInput.value.trim();
            const name = nameInput.value.trim();
            
            if (!phone || !name) {
                alert('Veuillez remplir tous les champs obligatoires');
                return;
            }
            
            // Animation de chargement
            continueBtn.style.opacity = '0.7';
            continueBtn.disabled = true;
            continueBtn.textContent = 'Chargement...';
            
            // Simulation d'envoi
            setTimeout(() => {
                showSuccessMessage();
                
                // Réinitialiser le bouton
                continueBtn.style.opacity = '1';
                continueBtn.disabled = false;
                continueBtn.textContent = 'Continuer ➤';
                
                // Passer à l'onglet suivant
                switchToCalendarTab();
                
            }, 1500);
        });
    }
    
    // Gestion du lecteur vidéo YouTube
    const videoContainer = document.querySelector('.video-container');
    const videoThumbnail = document.getElementById('videoThumbnail');
    const videoIframe = document.getElementById('videoIframe');
    
    if (videoContainer && videoThumbnail && videoIframe) {
        videoContainer.addEventListener('click', function() {
            playYouTubeVideo();
        });
    }
    
    function playYouTubeVideo() {
        // URL de la vidéo YouTube avec autoplay et start à 34 secondes
        const youtubeUrl = 'https://www.youtube.com/embed/smeS1I8PBgk?autoplay=1&start=34&rel=0&showinfo=0';
        
        // Masquer la thumbnail
        videoThumbnail.style.display = 'none';
        
        // Afficher et configurer l'iframe
        videoIframe.style.display = 'block';
        const iframe = videoIframe.querySelector('iframe');
        iframe.src = youtubeUrl;
        
        // Animation d'apparition
        videoIframe.style.opacity = '0';
        videoIframe.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            videoIframe.style.opacity = '1';
        }, 100);
    }
    
    // Fonction pour afficher le message de succès
    function showSuccessMessage() {
        const notification = document.createElement('div');
        notification.className = 'success-notification';
        notification.innerHTML = `
            <div class="notification-content">
                <div class="check-icon">✓</div>
                <div>
                    <h4>Informations enregistrées !</h4>
                    <p>Vous pouvez maintenant choisir votre créneau.</p>
                </div>
            </div>
        `;
        
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #28a745, #20c997);
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 10px;
            box-shadow: 0 10px 30px rgba(40, 167, 69, 0.3);
            z-index: 10000;
            max-width: 350px;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;
        
        const style = document.createElement('style');
        style.textContent = `
            .success-notification .notification-content {
                display: flex;
                align-items: center;
                gap: 1rem;
            }
            .success-notification .check-icon {
                width: 30px;
                height: 30px;
                background: rgba(255,255,255,0.2);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: bold;
                font-size: 1.2rem;
            }
            .success-notification h4 {
                margin: 0 0 0.25rem 0;
                font-size: 1rem;
            }
            .success-notification p {
                margin: 0;
                font-size: 0.9rem;
                opacity: 0.9;
            }
        `;
        
        document.head.appendChild(style);
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
                document.head.removeChild(style);
            }, 300);
        }, 4000);
    }
    

    
    // Fonction pour changer d'onglet
    function switchToCalendarTab() {
        const tabs = document.querySelectorAll('.tab');
        tabs.forEach(tab => tab.classList.remove('active'));
        tabs[1].classList.add('active');
    }
    

    
    // Formatage automatique du numéro de téléphone
    if (phoneInput) {
        phoneInput.addEventListener('input', function() {
            let value = this.value.replace(/\D/g, '');
            if (value.length > 0) {
                value = value.match(/.{1,2}/g)?.join(' ') || value;
                if (value.length > 14) {
                    value = value.substring(0, 14);
                }
            }
            this.value = value;
        });
    }
    
    // Gestion des onglets
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });
});