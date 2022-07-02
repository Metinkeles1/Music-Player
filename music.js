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
    new Music("Boşver", "Nilüfer", "1.jpeg", "1.mp3", "11.jpg"),
    new Music("Bu da Geçer mi Sevgilim", "Yalın", "2.jpeg", "2.mp3", "12.jpg"),
    new Music("Aramızda Uçurumlar", "Suat Suna", "3.jpeg", "3.mp3", "13.jpg"),
    new Music("Bella Ciao", "Becky G", "4.jpg", "4.mp3", "14.jpg"),
    new Music("In Da Club", "50 Cent", "5.jpg", "5.mp3", "15.jpg"),
    new Music("Bi' Tek Ben Anlarım", "KOFN", "6.jpg", "6.mp3", "16.jpg"),
]