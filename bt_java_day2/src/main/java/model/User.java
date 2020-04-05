package model;

public class User {
    private int id;
    private String name;
    private int age;
    private String position;
    private String address;

    public void setId(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }

    public void setname(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public int getAge() {
        return age;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public String getPosition() {
        return position;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getAddress() {
        return address;
    }

    public User(int id, String name, int age, String position, String address) {
        super();
        this.id = id;
        this.name = name;
        this.age = age;
        this.position = position;
        this.address = address;
    }

    @Override
    public String toString() {
        return 
        "User [id=]" + id + ", name=" + name + ", age=" + age + ", position=" + position + ", address=" + address;
    }

}