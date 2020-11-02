export interface ProjectBuild {
    project: string;
    version: string;
    commit: CommitInfo;
    build: BuildInfo;
}

export interface CommitInfo {
    sha1: string;
    branch: string;
    author: string;
}

export interface BuildInfo {
    status: string;
    time: string;
    number: number;
    details: object;
}
