package app;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import model.User;
import service.UserService;
import service.imlp.UserImlp;
import utils.InvalidException;

public final class App {
    private App() {
    }

    public static Scanner scanner = new Scanner(System.in);

    public static void main(final String[] args) throws InvalidException {
        String choose = null;
        boolean isExit = false;
        UserService userService = new UserImlp();
        List<User> userList = new ArrayList<User>();

        showMenu();
        while (true) {
            choose = scanner.nextLine();
            switch (choose) {
                case "1":
                    userList = userService.findAll();
                    for (User user : userList) {
                        System.out.println(user);
                    }
                    break;
                case "2":
                    System.out.println("This Options Is Still Buiding");
                    break;
                case "0":
                    System.out.println("Exitting...");
                    isExit = true;
                    break;
                default:
                    System.out.println("Wrong Option, Please Try Again");
                    break;
            }
            if (isExit) {
                break;
            }
            showMenu();
        }
    }

    public static void showMenu() {
        System.out.println("-----------DashBoard------------");
        System.out.println("1. Show Actor.");
        System.out.println("2. Add Actor.");
        System.out.println("0. Exit.");
        System.out.println("---------------------------");
        System.out.print("Choosing: ");
    }
}
