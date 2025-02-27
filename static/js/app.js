console.log('🚦 app.js has loaded!'); // Confirms app.js is loaded

document.addEventListener('alpine:init', () => {
    console.log('✅ Alpine.js initialized!');

    Alpine.data('fetchData', () => ({
        data1: [],
        data2: [],
        
        async init() {
            console.log('🚀 Fetching data...');

            try {
                // Fetch data from the first API endpoint
                const response1 = await fetch('https://jsonplaceholder.typicode.com/users');
                if (!response1.ok) throw new Error('Failed to fetch users data');
                
                this.data1 = await response1.json();
                console.log('📦 Data1 loaded:', this.data1);

                // Fetch data from the second API endpoint
                const response2 = await fetch('https://jsonplaceholder.typicode.com/posts');
                if (!response2.ok) throw new Error('Failed to fetch posts data');
                
                this.data2 = await response2.json();
                console.log('📦 Data2 loaded:', this.data2);

            } catch (error) {
                console.error('❌ Error fetching data:', error);
            }
        }
    }));

    console.log('🔍 fetchData component definition:', Alpine.data('fetchData'));

    // Manual Alpine store check
    document.addEventListener('DOMContentLoaded', () => {
        console.log('🧠 Alpine Store Check - Data1:', Alpine.store('fetchData')?.data1);
        console.log('🧠 Alpine Store Check - Data2:', Alpine.store('fetchData')?.data2);
    });
});
