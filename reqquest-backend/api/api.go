package api

import "net/http"
import "github.com/gin-gonic/gin"

type Server struct {
	serverAddr string
}

func NewServer(addr string) *Server {
	return &Server{
		serverAddr: addr,
	}
}

func (server *Server) RunServer() error {
	router := gin.Default()
	return http.ListenAndServe(server.serverAddr, router)
}
