export interface Project {
    projectId: number;
    projectName: string;
    projectCollectionsIds?: number[];
} 

export const dummyProjects: Project[] = [
    {
        projectId: 1,
        projectName: "Ziomm Forge",
        projectCollectionsIds: [1]
    }
]
