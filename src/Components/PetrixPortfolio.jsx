import React, { useEffect } from 'react';
import $ from 'jquery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'magnific-popup/dist/magnific-popup.css';
import 'marqueejs/marquee.css'; // Assuming you use marqueejs for the marquee effect

const PetrixPortfolio = () => {
    useEffect(() => {
        const petrix = {
            init() {
                this.textAnimation();
                this.marquee();
                this.buttonHover();
                this.normalHover();
                this.headingAnimation();
                this.animation();
                this.magnificPopup();
                this.menuFix();
                this.counter();
                this.stickSidebar();
                this.testimonialSlider();
                this.toggle();
                this.customMouse();
            },
            textAnimation() {
              // if (device_width > 767) {
              //   var hasAnim = $(".text_hover_animaiton");
              //   if (hasAnim.length !== 0) {
              //     hasAnim.each(function () {
              //       var $this = $(this);
              //       var splitType = "words,chars";
              //       new SplitText($this, {
              //         type: splitType,
              //         wordsClass: "menu-text",
              //       });
              //     });
              //   }
            },
            marquee() {
              $(".section_heading h2").marquee({
                speed: 70,
                gap: 0,
                delayBeforeStart: 0,
                direction: "left",
                duplicated: true,
                pauseOnHover: true,
                startVisible: true,
              });            },
            buttonHover() {
                // Implement buttonHover logic here
            },
            normalHover() {
                // Implement normalHover logic here
            },
            headingAnimation() {
                // Implement headingAnimation logic here
            },
            animation() {
                // Implement animation logic here
            },
            magnificPopup() {
                // Implement magnificPopup logic here
            },
            menuFix() {
                // Implement menuFix logic here
            },
            counter() {
                // Implement counter logic here
            },
            stickSidebar() {
                // Implement stickSidebar logic here
            },
            testimonialSlider() {
                // Implement testimonialSlider logic here
            },
            toggle() {
                // Implement toggle logic here
            },
            customMouse() {
                // Implement customMouse logic here
            }
        };

        petrix.init();

        return () => {
            // Cleanup function if needed
        };
    }, []); // Empty dependency array ensures that useEffect runs only once when the component mounts

    return (
        <div className="petrix-portfolio">
            {/* Your JSX content goes here */}
        </div>
    );
};

export default PetrixPortfolio;
