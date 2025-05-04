package entities

import "time"
import "fmt"

type Project struct {
	ID          int          `json:"id"`
	Name        string       `json:"name"`
	Description string       `json:"description"`
	Collection  []Collection `json:"collection,omitempty"`
	CreatedAt   time.Time    `json:"createdAt"`
}

func ValidateProject(project *Project) error {
	if project.ID <= 0 {
		return fmt.Errorf("Project Id is required")
	}
	if project.Name == "" {
		return fmt.Errorf("Project Name is required")
	}
	if project.Description == "" {
		return fmt.Errorf("Project Description is required")
	}
	if project.CreatedAt.IsZero() {
		return fmt.Errorf("Project Creation Time is required")
	}

	return nil
}
