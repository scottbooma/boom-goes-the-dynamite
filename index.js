function booma() {
  document.querySelector("#message").textContent = "BOOMA"
}

const button = document.querySelector("button")

button.addEventListener("click", event => booma())
