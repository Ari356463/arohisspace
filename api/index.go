package main

import (
    "net/http"
    "os"
)

func handler(w http.ResponseWriter, r *http.Request) {
    http.ServeFile(w, r, "public/index.html")
}

func main() {
    port := os.Getenv("PORT")
    if port == "" {
        port = "8080"
    }
    http.HandleFunc("/", handler)
    http.ListenAndServe(":"+port, nil)
}
