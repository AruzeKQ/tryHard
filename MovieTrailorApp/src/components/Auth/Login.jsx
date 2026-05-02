export default function Login() {
    return (
        <div>
            <div class="login-wrapper">
                <div class="login-box">
                    <h2>Đăng Nhập</h2>
                    <p>Vui lòng nhập tài khoản của bạn</p>

                    <form action="#">
                        <div class="input-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" placeholder="Ví dụ: khai@gmail.com" required />
                        </div>

                        <div class="input-group">
                            <div class="label-flex">
                                <label for="password">Mật khẩu</label>
                                <a href="#" class="forgot-link">Quên mật khẩu?</a>
                            </div>
                            <input type="password" id="password" placeholder="••••••••" required />
                        </div>

                        <button type="submit" class="login-btn">Vào hệ thống</button>
                    </form>

                    <div class="separator">
                        <span>Hoặc đăng nhập bằng</span>
                    </div>

                    <div class="social-btns">
                        <button class="social-btn">Google</button>
                        <button class="social-btn">Facebook</button>
                    </div>

                    <p class="signup-text">
                        Chưa có tài khoản? <a href="#">Đăng ký ngay</a>
                    </p>
                </div>
            </div>
        </div>
    )
}