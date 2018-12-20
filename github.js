class GitHub{
    constructor(){
        this.client_id='83f15e208cb74ead1592';
        this.client_secret='35ab0cf06395c93c12aae2fdfddb9fb9574e44a8';
        this.repos_count=5;
        this.repos_sort='created: asc';
    }

    async getUser(user){
        const profileResponse=await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const profile=await profileResponse.json();

        const repoResponse=await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repos=await repoResponse.json();

        return{
            profile,
            repos
        }
    }
}