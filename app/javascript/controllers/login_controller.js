import { Controller } from "@hotwired/stimulus";
import md5 from "blueimp-md5";
export default class extends Controller {
  connect() {
    document.getElementById("login").addEventListener("click", this.login);
  }
  login() {
    if (!document.getElementById("user_password").value == "") {
      document.getElementById("user_password").value = md5(
        document.getElementById("user_password").value
      );
    }
  }
}
