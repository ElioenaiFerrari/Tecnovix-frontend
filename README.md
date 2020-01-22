1 REF TELAS - https://xd.adobe.com/spec/c5064141-458d-4e2c-7cf4-816eed01f377-b337/
2 MOCK - https://github.com/typicode/json-server
3
4 Criar o FRONTEND do CRUD de um sistema de clientes de uma empresa.
5

~~ Ponto de entrada: A tela inicial do sistema deve ser a tela de Login~~

~~9 - Quando um usuário não logado tentar acessar alguma
10 rota que só deve ser acessada com autenticação,
11 o usuário deve ser redirecionado para a tela de login;~~
12
13 - Quando um usuário acessar a rota da tela de Login
14 e for identificado que ele logou anteriormente e sua sessão
15 está salva, ele deve ser redirecionado para a tela de Dashboard.
16
17 Regras gerais:
18 - Todo campo obrigatório deve ser indicado pelo
19 símbolo \* no final do label;
20
21 - Todo campo obrigatório deve ser validado quando houver
22 o clique no botão de ação do formulário
23 referente a esse campo. Deve ser indicado visualmente no
24 campo que este é obrigatório e também mostrado
25 abaixo do campo uma mensagem do tipo "O campo **\_\_\_** é obrigatório.";
26
27 - Todo campo que apresenta alguma regra de validação deve
28 ser validado quando houver o clique no botão de
29 ação do formulário referente a esse campo. Deve ser
30 indicado visualmente no campo que a regra de validação
31 não foi atendida e também mostrado abaixo do campo
32 uma mensagem que informe ao usuário o tipo de regra do campo;
33
34 - Quando um campo for obrigatório e também apresenta algum tipo
35 de validação, apenas uma mensagem deve ser exibida abaixo do campo;
36
37 - Todo botão de ação irá alterar o estado da aplicação.
38 Enquando a ação estiver acontecendo, o botão deve deixar
39 de ser clicável e um indicador (no próprio botão) deve ser exibido.
40 Quando a ação terminar, o botão deve
41 voltar a ser clicável e o indicador deve ser removido;
42
43 - Quando uma ação de CRIAR/ATUALIZAR/REMOVER acontecer deve
44 ser exibida uma mensagem de sucesso ou falha da ação;
45
46 - Toda listagem deve apresentar a informação de
47 carregando até que os dados estejam disponíveis
48 para a renderização;
49
50 - Todos os Modais terão os botões "Salvar" e "Cancelar".
51 O botão salvar é um botão de ação. O botão cancelar apenas fecha o modal.
52 Quando clicado no botão "Salvar", o modal só deve ser fechado após o término
53 da ação e caso a ação tenha sido executada com sucesso;
54
55 - Todo modal aberto em modo de "Adicionar" deve conter o formulário vazio
56 No modo "Editar" o formulário deve vir preenchido com as informações atuais;
57
58 - Ao clicar em "Sair", todas as informações do usuário salvas devem ser excluídas.
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74 Layout de Autenticação:
75 - O layout deve ser simples, sem a presença de menus ou qualquer informação
adicional.
76
77 Telas do Layout de Autenticação:
78 - Login
79 - Deve apresentar:
80 - Um título identificando a tela;
81 - Um formulário de login com os campos e-mail e senha;
82 - Um link para uma página "Esqueceu a senha?";
83 - Um checkbox "Lembrar-me" (MARCADO por padrão);
84 - O botão "Entrar".
85
86 - Deve seguir as regras:
87 - Os campos e-mail e senha devem ser obrigatórios;
88 - O campo e-mail deve apresentar um e-mail válido;
89 - O botão "Entrar" representa uma ação;
90
91 - Quando o login for feito com o "Lembrar-me" MARCADO, o login
92 do usuário deve ser persistido. Assim, mesmo que o usuário feche
93 o navegador ou a aba, quando ele acessar novamente, já deve ser
apresentado
94 a tela principal do usuário logado e não a tela de login novamente.
95 Quando o usuário clicar em "Sair", a persistência deve ser removida;
96
97 - Quando o login for feito como "Lembrar-me" DESCMARCADO, o login NÃO deve
98 ser persistido. Caso o navegador ou a aba seja fechada, no próximo acesso
99 deverá ser exibida a tela de login novamente.
100
101 - Esqueceu a senha
102 - Deve apresentar:
103 - Um título identificando a tela;
104 - Um formulário com o campo e-mail;
105 - O botão "Recuperar";
106 - Um link "Voltar ao login".
107 - Deve seguir as regras:
108 - O campo e-mail deve ser obrigatório;
109 - O campo e-mail deve apresentar um e-mail válido;
110 - O botão "Recuperar" representa uma ação;
111
112 - Após o usuário clicar em "Recuperar" e a ação terminar, ele deve ser
113 redirecionado para a tela de Login e deve ser exibida uma mensagem
114 informando que foi enviado um e-mail com as instruções de alteração
115 de senha para o e-mail informado.
116
117
118
119
120
121
122
123
124
125
126
127
128
129
130
131
132
133
134
135
136
137
138
139
140
141
142
143 Layout Autenticado:
144 - O layout deve apresentar um menu lateral com items que dêem acesso a todas
145 as principais páginas do sistema.
146
147 - No canto superior direito do layout deve haver a
148 informação do usuário atual logado. Quando passado o mouse
149 sobre esse informação, um menu dropdown deve aparecer com as opções "Minha
Conta" e "Sair".
150
151
152
153 Telas do Layout Autenticado:
154 - Dashboard
155 - Deve apresentar:
156 - 4 cards no topo:
157 - Card 1 - Número de clientes cadastrados;
158 - Card 2 - Número de projetos cadastrados;
159 - Card 3 - Porcentagem de projetos concluídos;
160 - Card 4 - Total faturado;
161 - Gráfico de barras vertical
162 - O gráfico deve apresentar no eixo X todos os meses do ano e
163 no eixo Y o total faturado em cada mês. Deve ser possível filtrar os
164 dados pelo ano.
165 - Clientes
166 - Deve apresentar:
167 - Breadcrumb do caminho da tela;
168 - Um título identificando a tela;
169
170 - A listagem com paginação de todos os clientes cadastrados em
171 forma de tabela/cards/lista de items (fica a critério);
172
173 - Um botão de "Adicionar" cliente;
174 - Pesquisa de clientes por nome e e-mail;
175
176 - Cada item da listagem deve conter os botões "Visualizar", "Editar" e
"Excluir"
177 - Deve seguir as regras:
178 - O botão de "Adicionar" deverá abrir um modal com um
179 formulário para cadastro do cliente. O formulário deve
180 ter os campos Nome, E-mail, Telefone, Endereço (Rua, Bairro, Cidade,
Estado, CEP).
181 Além disso, fica livre adicionar
182 qualquer outro campo que julga necessário. Os campos Nome, E-mail e
183 Telefone são obrigatórios. O campo E-mail
184 deve conter um e-mail válido;
185
186 - O botão "Editar" também deverá abrir um modal como o mesmo formulário.
187 O formulário deverá ser aberto com os
188 campos preenchidos com os dados do item da lista que foi clicado;
189
190 - O botão "Visualizar" de abrir uma nova página "Detalhes do Cliente".
191
192 - O botão "Excluir" pede uma confirmação ao usuário se ele deseja
193 realmente excluir o registro. Nessa confirmação há as opções
194 "Sim" e "Não". A opção "Não" apenas esconde a confirmação e
195 não realiza nenhuma ação. A opção "Sim" é um botão de ação e deverá
196 realizar a exclusão do registro.
197 - Página "Detalhes do Cliente"
198 - Deve apresentar:
199 - Breadcrumb do caminho da tela;
200 - Um título identificando a tela;
201 - Menu interno com os items "Detalhes", "Projetos"
202
203 - A página "Detalhes" deve apresentar as informações cadastrais do
204 cliente em um formulário, dando a opção de "Salvar", através de
205 um botão de açao na página.
206
207 - A página "Projetos" deve apresentar uma listagem com todos os
208 projetos relacionados ao cliente em questão. A listagem de projetos
209 aqui deve seguir as mesmas regras da listagem no menu principal,
descritas abaixo.
210
211
212
213 - Projetos
214 - Deve apresentar:
215 - Breadcrumb do caminho da tela;
216 - Um título identificando a tela;
217
218 - A listagem com paginação de todos os projetos cadastrados em forma
219 de tabela/cards/lista de items (fica a critério);
220
221 - Um botão de "Adicionar" funcionário;
222
223 - Pesquisa de projetos por Nome do projeto, Cliente (ajax select);
224
225 - Cada item da listagem deve conter os botões "Visualizar", "Editar" e
"Excluir"
226 - Deve seguir as regras:
227 - O botão de "Adicionar" deverá abrir um modal com um formulário
228 para cadastro do projeto. O formulário deve
229 ter os campos Nome, Descrição, Valor. Além disso, fica livre adicionar
230 qualquer outro campo que julga necessário. Os campos Nome e Valor são
obrigatórios.
231
232 - O botão "Editar" deverá abrir um modal como o mesmo formulário.
233 O formulário deverá ser aberto com os
234 campos preenchidos com os dados do item da lista que foi clicado;
235
236 - O botão "Visualizar" de abrir uma nova página "Detalhes do Projeto".
237
238 - O botão "Excluir" pede uma confirmação ao usuário se ele deseja
239 realmente excluir o registro. Nessa confirmação há as opções
240 "Sim" e "Não". A opção "Não" apenas esconde a confirmação e não
241 realiza nenhuma ação. A opção "Sim" é um botão de ação e deverá
242 realizar a exclusão do registro.
243 - Página "Detalhes do Projeto"
244 - Deve apresentar:
245 - Breadcrumb do caminho da tela;
246 - Um título identificando a tela;
247 - Menu interno com os items "Detalhes", "Tarefas" e "Partes
Interessadas"
248
249 - A página "Detalhes" deve apresentar as informações cadastrais do
250 projeto em um formulário, dando a opção de "Salvar", através de
251 um botão de açao na página.
252
253 - A página "Tarefas" deve apresentar uma listagem com todas as tarefas
254 relacionados ao projeto em questão.
255 Deve haver as opções de "Adicionar", "Atualizar" e "Excluir" tarefas.
256 Toda tarefa deve estar relacionada a um projeto (ajax select).
257 O cadastro de tarefas deve ter um título, descrição, prioridade,
258 data de início e duração da tarefa (em horas).
259 Os campos título, prioridade, data de início e duração da tarefa são
obrigatórios.
260
261 - A página "Partes Interessadas" deve conter a listagem de pessoas que
262 fazem parte do projeto e podem acompanhar seu desenvolvimento.
263 Deve haver as opções de "Adicionar", "Atualizar" e "Excluir" pessoas.
264 Cadastro apenas de nome e e-mail, ambos obrigatórios.
265
266
267
268
269
270
271
272
273
274
275
276
277
278
279
280
281
282 - Funcionários
283 - Deve apresentar:
284 - Breadcrumb do caminho da tela;
285 - Um título identificando a tela;
286
287 - A listagem com paginação de todos os funcionários cadastrados
288 em forma de tabela/cards/lista de items (fica a critério);
289
290 - Um botão de "Adicionar" funcionário;
291 - Pesquisa de funcionários por nome e e-mail;
292 - Cada item da listagem deve conter os botões "Editar" e "Excluir"
293 - Deve seguir as regras:
294 - O botão de "Adicionar" deverá abrir um modal com um formulário para
295 cadastro do funcionário. O formulário deve
296 ter os campos Nome, E-mail, Telefone, Endereço (Rua, Bairro, Cidade,
Estado, CEP),
297 Cargo (Select). Além disso, fica livre adicionar
298 qualquer outro campo que julga necessário. Os campos Nome, E-mail,
Telefone
299 e Cargo são obrigatórios. O campo E-mail
300 deve conter um e-mail válido;
301
302 - O botão "Editar" também deverá abrir um modal como o mesmo formulário.
303 O formulário deverá ser aberto com os
304 campos preenchidos com os dados do item da lista que foi clicado;
305
306 - O botão "Excluir" pede uma confirmação ao usuário se ele deseja
realmente
307 excluir o registro. Nessa confirmação há as opções
308 "Sim" e "Não". A opção "Não" apenas esconde a confirmação e não realiza
309 nenhuma ação. A opção "Sim" é um botão de ação e deverá
310 realizar a exclusão do registro.
311 - Minha Conta
312 - Deve apresentar:
313 - Breadcrumb do caminho da tela;
314 - Um título identificando a tela;
315
316 - Formulário com as informações do usuário logado (Nome e E-mail) com o
317 botão de ação "Salvar". Apenas o Nome pode ser editado, o campo
318 E-mail deve estar desabilitado para edição.
319
320 - Formulário para alteração de senha. Deverá ter os campos Senha Antiga,
Nova Senha
321 e Repetir Nova Senha e um botão de ação "Atualizar Senha".
322 - Deve seguir as regras:
323 - Ao clicar em atualizar senha, deve ser validado se as informações de
Nova Senha
324 e Repetir Nova Senha são iguais.
325
326
