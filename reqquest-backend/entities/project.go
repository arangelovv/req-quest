package entities

import "time"

type Project struct {
	ID          int          `json:"id"`
	Name        int          `json:"name"`
	Description string       `json:"description"`
	Collection  []Collection `json:"collection,omitempty"`
	CreatedAt   time.Time    `json:"createdAt"`
}
