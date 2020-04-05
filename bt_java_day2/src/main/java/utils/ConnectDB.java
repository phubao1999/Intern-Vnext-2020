package utils;

import java.sql.Connection;
import java.sql.DriverManager;
import java.util.Properties;


public class ConnectDB {
    private static Connection myConnect;
    private static String URL = "jdbc:mysql://localhost:3306/demo?useSSL=false";
    private static String USER = "root";
    private static String PASSWORD = "baodhqb05211";

    public static Connection getConnection() {
        try {
            // Properties properties = PropertiesUtils.readProperties();
            // URL = properties.getProperty("DB_URL");
            // USER = properties.getProperty("user");
            // PASSWORD = properties.getProperty("password");
            myConnect = DriverManager.getConnection(URL, USER, PASSWORD);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return myConnect;
    }
}