const GITHUB_USERNAME = "ilhamfachrudin-24";


export async function getGithubProjects(){

    try {


        const response = await fetch(

            `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`,

            {
                next:{
                    revalidate:3600
                }
            }

        );



        if(!response.ok){

            throw new Error(
                "Failed fetching GitHub data"
            );

        }



        const repos = await response.json();



        return repos.map(
            (repo:any)=>({

                name: repo.name,

                description:
                repo.description ||
                "Web3 and AI Development Project",

                language:
                repo.language ||
                "Technology",

                url:
                repo.html_url

            })

        );



    }

    catch(error){

        console.error(
            "GitHub API Error:",
            error
        );


        return [];

    }

}
