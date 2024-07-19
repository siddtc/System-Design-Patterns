
class SingletonComponent {
  private static myInstance: SingletonComponent;
  private age: number = 2;
  private constructor() {}

  public static getInstance() {
    if (this.myInstance == null) {
      this.myInstance = new SingletonComponent();
    }

    return this.myInstance;
  }

  public setAge(age: number): void {
    this.age = age;
  }
  public getAge(): number {
    return this.age;
  }
}

const singleTObj = SingletonComponent.getInstance();
const secondObj = SingletonComponent.getInstance();
// const thirdObj = new SingletonComponent(); /*error will be thrown on this statement */
console.log(singleTObj);
secondObj.setAge(100);
console.log(singleTObj);
