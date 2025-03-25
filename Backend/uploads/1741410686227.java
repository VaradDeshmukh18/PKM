// Simple class
class Person {
    // Field declaration (private variable)
    private String name;
    private int age;

    // Default constructor
    public Person() {
        this.name = "Unknown";
        this.age = 0;
    }

    // Parameterized constructor
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // Function declaration (Method)
    public void displayInfo() {
        System.out.println("Name: " + name + ", Age: " + age);
    }
}

// Class with inheritance
class Student extends Person {
    private int studentId;

    // Parameterized constructor
    public Student(String name, int age, int studentId) {
        super(name, age); // Calling parent class constructor
        this.studentId = studentId;
    }

    // Method override
    public void displayInfo() {
        super.displayInfo();
        System.out.println("Student ID: " + studentId);
    }
}

// Interface
interface Study {
    void study();
}

// Class implementing an interface
class EngineeringStudent extends Student implements Study {
    public EngineeringStudent(String name, int age, int studentId) {
        super(name, age, studentId);
    }

    // Implementing interface method
    public void study() {
        System.out.println("Engineering student is studying.");
    }
}

// Abstract class
abstract class Animal {
    // Abstract method
    abstract void makeSound();

    // Abstract class with a constructor
    public Animal() {
        System.out.println("An animal is created.");
    }
}

// Abstract class inheritance
abstract class Mammal extends Animal {
    protected int legs;
}

// Concrete class extending an abstract class
class Dog extends Mammal {
    public Dog() {
        this.legs = 4;
    }

    // Implementing abstract method
    public void makeSound() {
        System.out.println("Dog barks!");
    }
}

// Main class
public class Main {
    public static void main(String[] args) {
        // Variable declarations (int, float, String)
        int a = 10;
        float b = 20.5f;
        String text = "Hello";

        // Operators and expressions
        int sum = a + (int) b;
        float product = a * b;

        // Object creation
        Person p1 = new Person("Alice", 25);
        p1.displayInfo();

        // Object creation with parameters
        Student s1 = new Student("Bob", 20, 101);
        s1.displayInfo();

        // Array of objects
        Person[] people = new Person[2];
        people[0] = new Person("Charlie", 30);
        people[1] = new Person("David", 28);

        // Array of objects with initialization
        Student[] students = {
            new Student("Eve", 22, 102),
            new Student("Frank", 21, 103)
        };

        // Creating an object from a class that implements an interface
        EngineeringStudent engStudent = new EngineeringStudent("Grace", 24, 104);
        engStudent.study();

        // Abstract class instantiation via subclass
        Dog myDog = new Dog();
        myDog.makeSound();

        // Output results
        System.out.println("Sum: " + sum);
        System.out.println("Product: " + product);
    }
}
