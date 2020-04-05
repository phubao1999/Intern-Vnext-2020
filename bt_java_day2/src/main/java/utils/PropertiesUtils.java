package utils;

import java.io.IOException;
import java.util.Properties;

public class PropertiesUtils {
    public static Properties readProperties() {
        ClassLoader classLoader = Thread.currentThread().getContextClassLoader();
        Properties properties = new Properties();
        try {
            String propFileName = "db.properties";
            properties.load(classLoader.getResourceAsStream(propFileName));
        } catch(IOException e) {
            e.printStackTrace();
        }
        // Get Err In This File
        return properties;
    }
}