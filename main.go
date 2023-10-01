// Copyright (c) 2023 Luka Ivanović
// This code is licensed under MIT licence (see LICENCE for details)

package main

import (
	"net/http"

	"github.com/gorilla/mux"
)

func main() {
	router := mux.NewRouter()
	static := http.FileServer(http.Dir("./static/"))
	router.PathPrefix("/").Handler(http.StripPrefix("/", static))
	http.ListenAndServe(":8080", router)
}
