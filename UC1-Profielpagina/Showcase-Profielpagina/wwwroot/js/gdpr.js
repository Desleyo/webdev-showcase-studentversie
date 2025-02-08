class GDPR {

    constructor() {
        this.showStatus();
        this.showContent();
        this.bindEvents();

        if (this.cookieStatus() == null) this.showGDPR();
    }

    bindEvents() {
        let buttonAccept = document.querySelector('.gdpr-consent__button--accept');
        buttonAccept.addEventListener('click', () => {
            this.gdprSubmitted('accept')
        });

        //student uitwerking
        let buttonReject = document.querySelector('.gdpr-consent__button--reject');
        buttonReject.addEventListener('click', () => {
            this.gdprSubmitted('reject')
        });
    }

    gdprSubmitted(status) {
        this.cookieStatus(status);
        this.showStatus();
        this.showContent();
        this.hideGDPR();
    }

    showContent() {
        this.resetContent();
        const status = this.cookieStatus() == null ? 'not-chosen' : this.cookieStatus();
        const element = document.querySelector(`.content-gdpr-${status}`);
        element.classList.add('show');

    }

    resetContent(){
        const classes = [
            '.content-gdpr-accept',

//student uitwerking

            '.content-gdpr-not-chosen'];

        for(const c of classes){
            document.querySelector(c).classList.add('hide');
            document.querySelector(c).classList.remove('show');
        }
    }

    showStatus() {
        document.getElementById('content-gpdr-consent-status').innerHTML =
            this.cookieStatus() == null ? 'Niet gekozen' : this.cookieStatus();
    }

    cookieStatus(status) {

        if (status) {
            localStorage.setItem('gdpr-consent-choice', status);
            this.saveMetadata();
        }

//student uitwerking

        return localStorage.getItem('gdpr-consent-choice');
    }

    //student uitwerking
    saveMetadata() {
        let metadata = { date: '6-2-2024', time: '12:00' };
        let result = JSON.stringify(metadata);
        localStorage.setItem('metadata', result);
    }

    hideGDPR() {
        document.querySelector(`.gdpr-consent`).classList.add('hide');
        document.querySelector(`.gdpr-consent`).classList.remove('show');
    }

    showGDPR() {
        document.querySelector(`.gdpr-consent`).classList.add('show');
    }

}

const gdpr = new GDPR();

