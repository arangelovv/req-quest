package main

import (
	"log"

	"github.com/arangelovv/req-quest/api"
)

func main() {
	server := api.NewServer(":8080")
	if err := server.RunServer(); err != nil {
		log.Fatal(err)
	}
}
