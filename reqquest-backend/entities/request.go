package entities

import "time"

type Method string

const (
	Get    Method = "get"
	Post   Method = "post"
	Patch  Method = "patch"
	Put    Method = "put"
	Delete Method = "delete"
)

type Request struct {
	ID           int       `json:"id"`
	Name         string    `json:"name"`
	Method       Method    `json:"method"`
	CollectionId int       `json:"collectionId"` //Foreign Key Reference
	CreatedAt    time.Time `json:"createdAt"`
}
