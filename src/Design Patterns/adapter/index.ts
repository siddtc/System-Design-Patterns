abstract class Radio {
  public channel: number = 0;
  public volume: number = 0;
}

class IndianRadio extends Radio {
  public chanelChangeKaro(channel: number) {
    this.channel = channel;
  }
  public volumeKamKaro(volume: number) {
    this.volume = volume;
  }
  public volumeBadhaDo(volume: number) {
    this.volume = volume;
  }
}

const myRadio = new IndianRadio();

// Shipped this radio to my friend in USA...

// when my friend gets my radio, according to his common sense
// myRadio.setChannel(202.2) should work as radios over in  USA follow this method....

interface IAmericaRadio {
  setChannel(channel: number): void;
  increaseVolume(volume: number): void;
  decreaseVolume(volume: number): void;
}

class RadioAdapter implements IAmericaRadio {
  private radio: IndianRadio;

  constructor(radio: IndianRadio) {
    this.radio = radio;
  }

  public setChannel(channel: number): void {
    this.radio.chanelChangeKaro(channel);
  }

  public increaseVolume(volume: number): void {
    this.radio.volumeBadhaDo(volume);
  }

  public decreaseVolume(volume: number): void {
    this.radio.volumeKamKaro(volume);
  }
}

const newAmericanRadio = new RadioAdapter(myRadio);
