package fr.sparkit.spring.security.jwt.advice;

public class UserContext {

    private String username;

    public UserContext(String username) {
        this.username = username;
    }

    public String getUsername() {
        return username;
    }

}
