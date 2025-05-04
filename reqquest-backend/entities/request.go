package entities

import "time"
import "fmt"

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

func ValidateRequest(request *Request) error {
	if request.ID <= 0 {
		return fmt.Errorf("Request Id is required")
	}
	if request.Name == "" {
		return fmt.Errorf("Request Name is required")
	}
	if request.Method == "" {
		return fmt.Errorf("Request Method is required")
	}
	if request.Method != Get && request.Method != Post && request.Method != Patch && request.Method != Put && request.Method != Delete {
		return fmt.Errorf("invalid method: %s", request.Method)

	}
	if request.CreatedAt.IsZero() {
		return fmt.Errorf("Request Creation Time is required")
	}

	return nil
}
