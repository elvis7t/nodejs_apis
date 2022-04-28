>_ mkdir nodejs_api
>_ cd nodejs_api
>_ mkdir api
>_ cd api
>_ npm init
>_ vim inde.js "Entrepoint"
>_ npm install express
>_ node index.js
packge.json alterar
"start": "nodemon index.js"
>_ npm install -- save-dev nodemon
>_ npm start
>_ mkdir controller "Controle decide as coisas e chama o model"
>_ cd controller
>_ vim cont_atendimentos.js "Modulo criado e exportado como uma função, rotas tbm"
>_ npm install consign
"Consign agrupa rotas "
>_ cd ..
>_ mkdir config "Todos os arquivos de configuracao devem ficar aqui"
>_ cd config
>_ vim custom express
>_ npm install body-parser "Converte requisicoes para que seja lido no js"
>_ cd ..
>_ mkdir db
>_ cd db
>_ vim conexao.js
>_ npm install mysql2
>_ vim tabelas.js 
>_ cd ..
>_ mkdir model
>_ vim mod_atendimentos.js
>_ cd ..
>_ npm install moment
>_ 
>_ 
>_

postman
headers 
Content-Type application/json || application/x-www-form-urlencoded
Body
raw "Para enviar json"

Status HTTPS
https://www.httpstatuses.org/