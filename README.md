# Erro de import dinãmico em modulo

No main.js tem dois tipos de import do modulo: 

```
// importando modulo localmente
// import MyModule from './module'

// importando modulo compilado
import MyModule from '../module/mymodule.common'
```

Na primeira maneira funciona normalmente, porém estou importando manualmente, no segundo quando importo da compilação é dado um erro de chunk.

Em `src/module/index.js` o import dinamico é feito para pegar o layout informado pelo parâmetro do modulo:
```
// import dinamico
const LayoutModule = () => import (`./layouts/${library.layout}`)
const Layout = (await LayoutModule()).default
```

Em um teste com o código completo, memso trocando pelo import estático tinha dado um erro **ReferenceError: require is not defined**. Porém parece que esse erro se foi quando simplifiquei o código, porém a importação sem chunk deixa o módulo bem pesado.