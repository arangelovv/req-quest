package entities

import "time"
import "fmt"

type Collection struct {
	ID          int       `json:"id"`
	Name        string    `json:"name"`
	Description string    `json:"description"`
	ProjectId   int       `json:"projectId"` //Foreign Key Reference
	Requests    []Request `json:"requests,omitempty"`
	CreatedAt   time.Time `json:"createdAt"`
}

func ValidateCollection(collection *Collection) error {
	if collection.ID <= 0 {
		return fmt.Errorf("Collection Id is required")
	}
	if collection.Name == "" {
		return fmt.Errorf("Collection Name is required")
	}
	if collection.Description == "" {
		return fmt.Errorf("Collection Description is required")
	}
	if collection.CreatedAt.IsZero() {
		return fmt.Errorf("Collection Creation Time is required")
	}

	return nil
}
