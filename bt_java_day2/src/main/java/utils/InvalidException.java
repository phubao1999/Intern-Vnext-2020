package utils;

public class InvalidException extends Exception {
	private static final long serialVersionUID = 1L;
    private String msg;

    public String getMsg() {
        return this.msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public InvalidException(String msg) {
        super();
        this.msg = msg;
    }

}