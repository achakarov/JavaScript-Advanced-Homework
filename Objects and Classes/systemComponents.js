function systemComponents(input) {

    let result = {};

    input.forEach(line => {
        let [systemName, component, subcomponent] = line.split(" | ");
        if (!result[systemName]) {
            result[systemName] = {};
        }

        if (!result[systemName][component]) {
            result[systemName][component] = [];
        }

        result[systemName][component].push(subcomponent);
    });

    Object.entries(result).sort((a, b) => {
        return Object.entries(b[1]).length - Object.entries(a[1]).length || a[0].localeCompare(b[0]);
    }).forEach(([system, components]) => {
        console.log(system); 
        Object.entries(components).sort((curr, next) => {
            return next[1].length - curr[1].length;
        }).forEach(([component, subComponents]) => {
            console.log(`|||${component}`);
            subComponents.forEach(x => {
                console.log(`||||||${x}`); 
            });
        });
    });
}

systemComponents([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
])