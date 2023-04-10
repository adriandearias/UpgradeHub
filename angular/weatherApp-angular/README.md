Los requisitos mínimos son todos los que se incluyen en la parte de "Proyecto" de Notion (tanto la iteración 1 como la 2) exceptuando los "Bonus" que son opcionales y contarán como extras.
La práctica es individual.
La temática de la práctica es totalmente libre, se pone un ejemplo de super-héroes pero no es necesario seguirlo. La idea es que apliquéis todos los conceptos que hemos ido aprendiendo y por lo tanto tendréis que hacer como mínimo:

- Una arquitectura de proyecto que siga las buenas prácticas explicadas en clase: pages, shared, core, etc.
	
- Una página "Home" con información sobre el proyecto que habéis realizado. En el proyecto especifica que tiene que haber 3 componentes hijos pero no es obligatorio. Habrá que crear componentes hijos con cabeza y cuando consideremos que puede ser útil (esto aplica para todas las páginas).
	
- Una página "Lista" con un listado de elementos. Esos elementos serán de esa temática que hayáis escogido.
	
- Los datos a mostrar se deben recuperar con un servicio (es recomendable tener un servicio "api" para los datos brutos y uno "transformado" que mapee con RXJS los datos de la API y deje solo lo que necesitemos.
		
- Se deberá añadir una Pipe de Angular que aplique algún tipo de transformación sobre los elementos del listado: filtrar, ordenar, etc. (Ponen el ejemplo de paginación y filtrado por nombre pero podéis implementar otros pipes más acordes a vuestra temática).
		
- El componente que muestra cada elemento deberá ser reutilizable y ir en "shared". Lo reutilizaremos en la página de "Mis creaciones".
		
- Una página "detalle" a la que se accederá al pulsar sobre un elemento del listado. Hay que intentar crear varios componentes hijo y mostrar información más ampliada en esta página.
	
- Un header y un footer. El primero con enlaces para navegar por la web (siempre con el router de Angular y utilizando lazy loading) y el segundo con enlaces a redes sociales (estos si serán href al ir a páginas web externas).
	
- Una vista "Crear elemento" que nos permita con un formulario reactivo crear nuevos elementos de la temática que seleccionemos. Esos elementos creados se mostrarán en otra página "Mis creaciones" que como hemos comentado reutilizará el componente del listado de elementos (Si por vuestra temática creáis elementos distintos a los mostrados en el listado no hay problema en que no cumpláis esto, pero intentad crear algún componente shared).
	
- Una página de "About us" con información del creador de la web y del proyecto.
	
- En la API habrá que combinar peticiones a dos endpoints diferentes. Para esto podemos concatenar peticiones con switchMap o hacerlas paralelas con forkJoin. (Esto de todos los requisitos es el más complejo, si alguno no lo consigue pero hace una buena práctica podréis superar el bloque).

- La API que utilicéis queda totalmente a vuestra elección. Podéis crear una propia con Node, utilizar una fake API como por ejemplo "mockapi" o recurrir a JSON Server.

- Los extras que se proponen son tests, cambio de idioma y web responsive pero si os apetece más hacer alguna otra funcionalidad extra distinta sentiros libres.(Ej: Login, JWT, loading, etc).


Fechas:
	
La práctica deberá entregarse como fecha máxima el día 18 de Abril.
¡Mucho ánimo!
