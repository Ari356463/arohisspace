package handler

import (
    "fmt"
    "net/http"
)

func Handler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Hello from Go server!")
}

/*
func main(){
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "index.html")
	})

	fmt.Println("server is running on https://localhost:8080/")
	http.ListenAndServe(":8080", nil)
}
*/
