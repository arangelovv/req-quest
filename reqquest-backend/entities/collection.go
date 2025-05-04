package entities

import "time"

type Collection struct {
	ID          int       `json:"id"`
	Name        string    `json:"name"`
	Description string    `json:"description"`
	ProjectId   int       `json:"projectId"` //Foreign Key Reference
	Requests    []Request `json:"requests,omitempty"`
	CreatedAt   time.Time `json:"createdAt"`
}
