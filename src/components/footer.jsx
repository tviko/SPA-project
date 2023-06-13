function Footer() {
      return <footer className="page-footer indigo lighten-1">
            <div className="footer-copyright">
                  <div className="container">
                        © {new Date().getFullYear()}
                        Dilyara Gafarova, Viktoria Teibash, Polina Fedoseeva
                        <a className="grey-text text-lighten-4 right"
                              href="#!">Repository</a>
                  </div>
            </div>
      </footer>
}
export { Footer };