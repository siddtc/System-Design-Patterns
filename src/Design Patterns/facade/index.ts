// Example: Home Theater System
// Imagine you have a home theater system with various components like a DVD player, projector, and surround sound system.
// Instead of managing each component individually,
// you can create a Facade that provides a simple interface for common tasks.

class DVDPlayer {
  public on(): void {
    console.log('DVD Player is ON');
  }

  public play(movie: string): void {
    console.log(`Playing movie: ${movie}`);
  }

  public off(): void {
    console.log('DVD Player is OFF');
  }
}

class Projector {
  public on(): void {
    console.log('Projector is ON');
  }

  public off(): void {
    console.log('Projector is OFF');
  }
}

class SurroundSoundSystem {
  public on(): void {
    console.log('Surround Sound System is ON');
  }

  public setVolume(level: number): void {
    console.log(`Setting volume to ${level}`);
  }

  public off(): void {
    console.log('Surround Sound System is OFF');
  }
}

class HomeTheaterFacade {
  private dvdPlayer: DVDPlayer;
  private projector: Projector;
  private soundSystem: SurroundSoundSystem;

  constructor(
    dvdPlayer: DVDPlayer,
    projector: Projector,
    soundSystem: SurroundSoundSystem
  ) {
    this.dvdPlayer = dvdPlayer;
    this.projector = projector;
    this.soundSystem = soundSystem;
  }

  public watchMovie(movie: string): void {
    console.log('Get ready to watch a movie...');
    this.dvdPlayer.on();
    this.projector.on();
    this.soundSystem.on();
    this.soundSystem.setVolume(5);
    this.dvdPlayer.play(movie);
  }

  public endMovie(): void {
    console.log('Shutting down movie theater...');
    this.dvdPlayer.off();
    this.projector.off();
    this.soundSystem.off();
  }
}

// Usage

// Client code
const dvdPlayer = new DVDPlayer();
const projector = new Projector();
const soundSystem = new SurroundSoundSystem();

const homeTheater = new HomeTheaterFacade(dvdPlayer, projector, soundSystem);

// Start watching a movie
homeTheater.watchMovie('Inception');

// End the movie
homeTheater.endMovie();
