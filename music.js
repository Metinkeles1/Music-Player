class Music {
    constructor(title, singer, img, file, bgImage) {
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
        this.bgImage = bgImage;
    }

    getName() {
        return this.title;
    }
}


const musicList = [
    new Music("Bella Ciao", "Becky G", "1.jpg", "1.mp3", "1.jpg"),
    new Music("In Da Club", "50 Cent", "2.jpg", "2.mp3", "2.jpg"),
    new Music("Bi' Tek Ben Anlarım", "KOFN", "3.jpg", "3.mp3", "3.jpg"),
    new Music("Hadi Çal", "Derya Uluğ", "4.jpg", "4.mp3", "4.jpg"),
    new Music("Arıyorum", "Edis", "5.jpg", "5.mp3", "5.jpg"),
    new Music("Aşk Sadece Anlayana", "Velet", "6.jpg", "6.mp3", "6.jpg"),
]