// Simple lively effects for our Cloud Lab website

document.addEventListener('DOMContentLoaded', () => {

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                document.querySelector(link.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Image hover glow effect
    const mainImage = document.querySelector('img');
    if (mainImage) {
        mainImage.addEventListener('mouseover', () => {
            mainImage.style.boxShadow = '0 0 25px #667eea';
        });
        mainImage.addEventListener('mouseout', () => {
            mainImage.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
        });
    }

    // Simple typing effect for header (fun touch)
    const headerText = document.querySelector('h1');
    if (headerText) {
        const originalText = headerText.textContent;
        headerText.textContent = '';
        let i = 0;
        const type = () => {
            if (i < originalText.length) {
                headerText.textContent += originalText.charAt(i);
                i++;
                setTimeout(type, 50);
            }
        };
        setTimeout(type, 800);
    }

    console.log('✅ Domain Expansion website scripts loaded!');
});