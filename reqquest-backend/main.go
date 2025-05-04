package main

import (
	"fmt"
	"log"

	"github.com/arangelovv/req-quest/api"
)

func main() {
	server := api.NewServer(":8080")

	fmt.Println("Server listening on port", server.GetAddr())
	if err := server.RunServer(); err != nil {
		log.Fatal(err)
	}
}
