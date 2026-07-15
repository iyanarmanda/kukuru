---
title: Mermaid Testing
published: 2026-07-14
description: Mermaid embed testing in Markdown.
tags: [Markdown, Demo]
category: Testing
draft: true
---

All of the above is itended to test the UI and the rendering result of [Mermaid](https://mermaid.js.org) using [rehype-mermaid](https://github.com/remcohaszing/rehype-mermaid).

## Flowcharts

Doc: [https://mermaid.js.org/syntax/flowchart.html](https://mermaid.js.org/syntax/flowchart.html)

```mermaid
flowchart TD
  A[Start] --> B{Is it?}
  B -->|Yes| C[OK]
  C --> D[Rethink]
  D --> B
  B ---->|No| E[End]
```

```mermaid
flowchart TB
  c1-->a2
  subgraph one
  a1-->a2
  end
  subgraph two
  b1-->b2
  end
  subgraph three
  c1-->c2
  end
  one --> two
  three --> two
  two --> c2
```

```mermaid
flowchart LR
  subgraph TOP
    direction TB
    subgraph B1
      direction RL
      i1 -->f1
    end
    subgraph B2
      direction BT
      i2 -->f2
    end
  end
  A --> TOP --> B
  B1 --> B2
```

## Sequence Diagram

Doc: [https://mermaid.js.org/syntax/sequenceDiagram.html](https://mermaid.js.org/syntax/sequenceDiagram.html)

```mermaid
sequenceDiagram
  Alice->>Bob: Hello Bob, how are you ?
  Bob->>Alice: Fine, thank you. And you?
  create participant Carl
  Alice->>Carl: Hi Carl!
  create actor D as Donald
  Carl->>D: Hi!
  destroy Carl
  Alice-xCarl: We are too many
  destroy Bob
  Bob->>Alice: I agree
```

```mermaid
sequenceDiagram
  autonumber
  Alice->>John: Hello John, how are you?
  loop HealthCheck
    John->>John: Fight against hypochondria
  end
  Note right of John: Rational thoughts!
  John-->>Alice: Great!
  John->>Bob: How about you?
  Bob-->>John: Jolly good!
```

## Gantt Chart

Doc: [https://mermaid.js.org/syntax/gantt.html](https://mermaid.js.org/syntax/gantt.html)

```mermaid
gantt
  dateFormat  YYYY-MM-DD
  title       Adding GANTT diagram functionality to mermaid
  excludes    weekends

  section A section
  Completed task            :done,    des1, 2014-01-06,2014-01-08
  Active task               :active,  des2, 2014-01-09, 3d
  Future task               :         des3, after des2, 5d
  Future task2              :         des4, after des3, 5d

  section Critical tasks
  Completed task in the critical line :crit, done, 2014-01-06,24h
  Implement parser and jison          :crit, done, after des1, 2d
  Create tests for parser             :crit, active, 3d
  Future task in critical line        :crit, 5d
  Create tests for renderer           :2d
  Add to mermaid                      :until isadded
  Functionality added                 :milestone, isadded, 2014-01-25, 0d

  section Documentation
  Describe gantt syntax               :active, a1, after des1, 3d
  Add gantt diagram to demo page      :after a1  , 20h
  Add another diagram to demo page    :doc1, after a1  , 48h

  section Last section
  Describe gantt syntax               :after doc1, 3d
  Add gantt diagram to demo page      :20h
  Add another diagram to demo page    :48h
```

```mermaid
gantt
  dateFormat HH:mm
  axisFormat %H:%M
  Initial vert : vert, v1, 17:30, 2m
  Task A : 3m
  Task B : 8m
  Final vert : vert, v2, 17:58, 4m
```

### Bar Chart

```mermaid
gantt
  title Git Issues - days since last update
  dateFormat X
  axisFormat %s
  section Issue19062
  71   : 0, 71
  section Issue19401
  36   : 0, 36
  section Issue193
  34   : 0, 34
  section Issue7441
  9    : 0, 9
  section Issue1300
  5    : 0, 5
```

## Class Diagram

Doc: [https://mermaid.js.org/syntax/classDiagram.html](https://mermaid.js.org/syntax/classDiagram.html)

```mermaid
---
title: Animal example
---
classDiagram
  note "From Duck till Zebra"
  Animal <|-- Duck
  note for Duck "can fly<br>can swim<br>can dive<br>can help in debugging"
  Animal <|-- Fish
  Animal <|-- Zebra
  Animal : +int age
  Animal : +String gender
  Animal: +isMammal()
  Animal: +mate()
  class Duck{
    +String beakColor
    +swim()
    +quack()
  }
  class Fish{
    -int sizeInFeet
    -canEat()
  }
  class Zebra{
    +bool is_wild
    +run()
  }
```

```mermaid
classDiagram
  Class01 <|-- AveryLongClass : Cool
  <<Interface>> Class01
  Class09 --> C2 : Where am I?
  Class09 --* C3
  Class09 --|> Class07
  Class07 : equals()
  Class07 : Object[] elementData
  Class01 : size()
  Class01 : int chimp
  Class01 : int gorilla
  class Class10 {
    <<service>>
    int id
    size()
  }
```

### Relationship

```mermaid
classDiagram
  classA <|-- classB
  classC *-- classD
  classE o-- classF
  classG <-- classH
  classI -- classJ
  classK <.. classL
  classM <|.. classN
  classO .. classP
```

```mermaid
classDiagram
  classA --|> classB : Inheritance
  classC --* classD : Composition
  classE --o classF : Aggregation
  classG --> classH : Association
  classI -- classJ : Link(Solid)
  classK ..> classL : Dependency
  classM ..|> classN : Realization
  classO .. classP : Link(Dashed)
```

```mermaid
classDiagram
  classA <|--|> classB
```

```mermaid
classDiagram
  Customer "1" --> "*" Ticket
  Student "1" --> "1..*" Course
  Galaxy --> "many" Star : Contains
```

### Lollipop Interfaces

```mermaid
classDiagram
  class Class01 {
    int amount
    draw()
  }
  Class01 --() bar
  Class02 --() bar

  foo ()-- Class01
```

### Namespace

```mermaid
classDiagram
  namespace Company.Engineering.Backend {
    class Developer {
      +writeCode()
    }
  }
  namespace Company.Engineering.Frontend {
    class Designer {
      +createMockup()
    }
  }
  namespace Company.Engineering {
    class TechLead {
      +planSprint()
    }
  }
  TechLead --> Developer : leads
  TechLead --> Designer : leads
```

```mermaid
---
config:
  class:
    hierarchicalNamespaces: false
---
classDiagram
  namespace Company.Engineering.Backend {
    class Developer {
      +writeCode()
    }
  }
  namespace Company.Engineering.Frontend {
    class Designer {
      +createMockup()
    }
  }
  namespace Company {
    class CEO {
      +makeDecisions()
    }
  }
  CEO --> Developer : oversees
  CEO --> Designer : oversees
```

## State Diagram

Doc: [https://mermaid.js.org/syntax/stateDiagram.html](https://mermaid.js.org/syntax/stateDiagram.html)

```mermaid
---
title: Simple sample
---
stateDiagram-v2
  [*] --> Still
  Still --> [*]

  Still --> Moving
  Moving --> Still
  Moving --> Crash
  Crash --> [*]
```

### Composite States

```mermaid
stateDiagram-v2
  [*] --> First
  First --> Second
  First --> Third

  state First {
    [*] --> fir
    fir --> [*]
  }
  state Second {
    [*] --> sec
    sec --> [*]
  }
  state Third {
    [*] --> thi
    thi --> [*]
  }
```

```mermaid
stateDiagram-v2
  [*] --> First

  state First {
    [*] --> Second

    state Second {
      [*] --> second
      second --> Third

      state Third {
        [*] --> third
        third --> [*]
      }
    }
  }
```

### Choice

```mermaid
stateDiagram-v2
  state if_state <<choice>>
  [*] --> IsPositive
  IsPositive --> if_state
  if_state --> False: if n < 0
  if_state --> True : if n >= 0
```

### Forks

```mermaid
stateDiagram-v2
  state fork_state <<fork>>
    [*] --> fork_state
    fork_state --> State2
    fork_state --> State3

    state join_state <<join>>
    State2 --> join_state
    State3 --> join_state
    join_state --> State4
    State4 --> [*]
```

### Notes

```mermaid
stateDiagram-v2
  State1: The state with a note
  note right of State1
    Important information! You can write
    notes.
  end note
  State1 --> State2
  note left of State2 : This is the note to the left.
```

## Pie Chart

Doc: [https://mermaid.js.org/syntax/pie.html](https://mermaid.js.org/syntax/pie.html)

```mermaid
pie title Pets adopted by volunteers
    "Dogs" : 386
    "Cats" : 85
    "Rats" : 15
```

```mermaid
---
config:
  pie:
    textPosition: 0.5
    donutHole: 0.2
    highlightSlice: Potassium
  themeVariables:
    pieOuterStrokeWidth: "5px"
---
pie showData
    title Key elements in Product X
    "Calcium" : 42.96
    "Potassium" : 50.05
    "Magnesium" : 10.01
    "Iron" :  5
```

## Git Graph

Doc: [live editor](https://mermaid.live/edit#pako:eNqNUEtugzAQvUo064iPDQa8baseoLuKjYMNtgI2MnbUNOLuHVKFTauqs_K8eR_P3KBzUgGHA9ZgwqsXs27t4V6dmyYTfu9OXthOH6S6qNHNO0er7uxi-IH_4bRrJmHsA5yUH9T_XOAIgzcSePBRHQGVaIQt3DZmC0GrSbXA8SmFP7fQ2hU1s7Dvzk0PmXdx0MB7MS7YxVmKoJ6NGLzYKd_gizTB-Z0pYnBvV9s9SKMTUuH4BuE6b4cdzBIwrnO2N8OGRz8irEOYF56m2zjBw-t4SnCjdDFSCx_0pWEpI6wWhCpWUVFSKrtT3tQ9KfJeVllOBKwrflxZDHxy0QbgeXZfbIv5AE6rpK6KpiG0ylhWFtURrsjJaVKwErG8qgkhjKHL5_0UGfLLDKtGSZ3ldP0C7imn9g)

*It's on experimental*

```mermaid
  gitGraph
    commit
    commit
    branch develop
    checkout develop
    commit
    commit
    checkout main
    merge develop
    commit
    commit
```

## User Journey Diagram

Doc: [https://mermaid.js.org/syntax/userJourney.html](https://mermaid.js.org/syntax/userJourney.html)

```mermaid
journey
  title My working day
  section Go to work
    Make tea: 5: Me
    Go upstairs: 3: Me
    Do work: 1: Me, Cat
  section Go home
    Go downstairs: 5: Me
    Sit down: 5: Me
```

## C4 Diagram

Doc: [https://mermaid.js.org/syntax/c4.html](https://mermaid.js.org/syntax/c4.html)

*It's on experimental*

### C4Context

```mermaid
C4Context
  title System Context diagram for Internet Banking System
  Enterprise_Boundary(b0, "BankBoundary0") {
    Person(customerA, "Banking Customer A", "A customer of the bank, with personal bank accounts.")
    Person(customerB, "Banking Customer B")
    Person_Ext(customerC, "Banking Customer C", "desc")

    Person(customerD, "Banking Customer D", "A customer of the bank, <br/> with personal bank accounts.")

    System(SystemAA, "Internet Banking System", "Allows customers to view information about their bank accounts, and make payments.")

    Enterprise_Boundary(b1, "BankBoundary") {

      SystemDb_Ext(SystemE, "Mainframe Banking System", "Stores all of the core banking information about customers, accounts, transactions, etc.")

      System_Boundary(b2, "BankBoundary2") {
        System(SystemA, "Banking System A")
        System(SystemB, "Banking System B", "A system of the bank, with personal bank accounts. next line.")
      }

      System_Ext(SystemC, "E-mail system", "The internal Microsoft Exchange e-mail system.")
      SystemDb(SystemD, "Banking System D Database", "A system of the bank, with personal bank accounts.")

      Boundary(b3, "BankBoundary3", "boundary") {
        SystemQueue(SystemF, "Banking System F Queue", "A system of the bank.")
        SystemQueue_Ext(SystemG, "Banking System G Queue", "A system of the bank, with personal bank accounts.")
      }
    }
  }

  BiRel(customerA, SystemAA, "Uses")
  BiRel(SystemAA, SystemE, "Uses")
  Rel(SystemAA, SystemC, "Sends e-mails", "SMTP")
  Rel(SystemC, customerA, "Sends e-mails to")

  UpdateElementStyle(customerA, $fontColor="red", $bgColor="grey", $borderColor="red")
  UpdateRelStyle(customerA, SystemAA, $textColor="blue", $lineColor="blue", $offsetX="5")
  UpdateRelStyle(SystemAA, SystemE, $textColor="blue", $lineColor="blue", $offsetY="-10")
  UpdateRelStyle(SystemAA, SystemC, $textColor="blue", $lineColor="blue", $offsetY="-40", $offsetX="-50")
  UpdateRelStyle(SystemC, customerA, $textColor="red", $lineColor="red", $offsetX="-50", $offsetY="20")

  UpdateLayoutConfig($c4ShapeInRow="3", $c4BoundaryInRow="1")
```

### C4Container

```mermaid
C4Container
  title Container diagram for Internet Banking System

  System_Ext(email_system, "E-Mail System", "The internal Microsoft Exchange system", $tags="v1.0")
  Person(customer, Customer, "A customer of the bank, with personal bank accounts", $tags="v1.0")

  Container_Boundary(c1, "Internet Banking") {
    Container(spa, "Single-Page App", "JavaScript, Angular", "Provides all the Internet banking functionality to customers via their web browser")
    Container_Ext(mobile_app, "Mobile App", "C#, Xamarin", "Provides a limited subset of the Internet banking functionality to customers via their mobile device")
    Container(web_app, "Web Application", "Java, Spring MVC", "Delivers the static content and the Internet banking SPA")
    ContainerDb(database, "Database", "SQL Database", "Stores user registration information, hashed auth credentials, access logs, etc.")
    ContainerDb_Ext(backend_api, "API Application", "Java, Docker Container", "Provides Internet banking functionality via API")
  }

  System_Ext(banking_system, "Mainframe Banking System", "Stores all of the core banking information about customers, accounts, transactions, etc.")

  Rel(customer, web_app, "Uses", "HTTPS")
  UpdateRelStyle(customer, web_app, $offsetY="60", $offsetX="90")
  Rel(customer, spa, "Uses", "HTTPS")
  UpdateRelStyle(customer, spa, $offsetY="-40")
  Rel(customer, mobile_app, "Uses")
  UpdateRelStyle(customer, mobile_app, $offsetY="-30")

  Rel(web_app, spa, "Delivers")
  UpdateRelStyle(web_app, spa, $offsetX="130")
  Rel(spa, backend_api, "Uses", "async, JSON/HTTPS")
  Rel(mobile_app, backend_api, "Uses", "async, JSON/HTTPS")
  Rel_Back(database, backend_api, "Reads from and writes to", "sync, JDBC")

  Rel(email_system, customer, "Sends e-mails to")
  UpdateRelStyle(email_system, customer, $offsetX="-45")
  Rel(backend_api, email_system, "Sends e-mails using", "sync, SMTP")
  UpdateRelStyle(backend_api, email_system, $offsetY="-60")
  Rel(backend_api, banking_system, "Uses", "sync/async, XML/HTTPS")
  UpdateRelStyle(backend_api, banking_system, $offsetY="-50", $offsetX="-140")
```

### C4Component

```mermaid
C4Component
  title Component diagram for Internet Banking System - API Application

  Container(spa, "Single Page Application", "javascript and angular", "Provides all the internet banking functionality to customers via their web browser.")
  Container(ma, "Mobile App", "Xamarin", "Provides a limited subset to the internet banking functionality to customers via their mobile device.")
  ContainerDb(db, "Database", "Relational Database Schema", "Stores user registration information, hashed authentication credentials, access logs, etc.")
  System_Ext(mbs, "Mainframe Banking System", "Stores all of the core banking information about customers, accounts, transactions, etc.")

  Container_Boundary(api, "API Application") {
    Component(sign, "Sign In Controller", "MVC Rest Controller", "Allows users to sign in to the internet banking system")
    Component(accounts, "Accounts Summary Controller", "MVC Rest Controller", "Provides customers with a summary of their bank accounts")
    Component(security, "Security Component", "Spring Bean", "Provides functionality related to singing in, changing passwords, etc.")
    Component(mbsfacade, "Mainframe Banking System Facade", "Spring Bean", "A facade onto the mainframe banking system.")

    Rel(sign, security, "Uses")
    Rel(accounts, mbsfacade, "Uses")
    Rel(security, db, "Read & write to", "JDBC")
    Rel(mbsfacade, mbs, "Uses", "XML/HTTPS")
  }

  Rel_Back(spa, sign, "Uses", "JSON/HTTPS")
  Rel(spa, accounts, "Uses", "JSON/HTTPS")

  Rel(ma, sign, "Uses", "JSON/HTTPS")
  Rel(ma, accounts, "Uses", "JSON/HTTPS")

  UpdateRelStyle(spa, sign, $offsetY="-40")
  UpdateRelStyle(spa, accounts, $offsetX="40", $offsetY="40")

  UpdateRelStyle(ma, sign, $offsetX="-90", $offsetY="40")
  UpdateRelStyle(ma, accounts, $offsetY="-40")

    UpdateRelStyle(sign, security, $offsetX="-160", $offsetY="10")
    UpdateRelStyle(accounts, mbsfacade, $offsetX="140", $offsetY="10")
    UpdateRelStyle(security, db, $offsetY="-40")
    UpdateRelStyle(mbsfacade, mbs, $offsetY="-40")
```

### C4Dynamic

```mermaid
C4Dynamic
  title Dynamic diagram for Internet Banking System - API Application

  ContainerDb(c4, "Database", "Relational Database Schema", "Stores user registration information, hashed authentication credentials, access logs, etc.")
  Container(c1, "Single-Page Application", "JavaScript and Angular", "Provides all of the Internet banking functionality to customers via their web browser.")
  Container_Boundary(b, "API Application") {
    Component(c3, "Security Component", "Spring Bean", "Provides functionality Related to signing in, changing passwords, etc.")
    Component(c2, "Sign In Controller", "Spring MVC Rest Controller", "Allows users to sign in to the Internet Banking System.")
  }
  Rel(c1, c2, "Submits credentials to", "JSON/HTTPS")
  Rel(c2, c3, "Calls isAuthenticated() on")
  Rel(c3, c4, "select * from users where username = ?", "JDBC")

  UpdateRelStyle(c1, c2, $textColor="red", $offsetY="-40")
  UpdateRelStyle(c2, c3, $textColor="red", $offsetX="-40", $offsetY="60")
  UpdateRelStyle(c3, c4, $textColor="red", $offsetY="-40", $offsetX="10")
```

### C4Deployment

```mermaid
C4Deployment
  title Deployment Diagram for Internet Banking System - Live

  Deployment_Node(mob, "Customer's mobile device", "Apple IOS or Android"){
    Container(mobile, "Mobile App", "Xamarin", "Provides a limited subset of the Internet Banking functionality to customers via their mobile device.")
  }

  Deployment_Node(comp, "Customer's computer", "Microsoft Windows or Apple macOS"){
    Deployment_Node(browser, "Web Browser", "Google Chrome, Mozilla Firefox,<br/> Apple Safari or Microsoft Edge"){
      Container(spa, "Single Page Application", "JavaScript and Angular", "Provides all of the Internet Banking functionality to customers via their web browser.")
    }
  }

  Deployment_Node(plc, "Big Bank plc", "Big Bank plc data center"){
    Deployment_Node(dn, "bigbank-api*** x8", "Ubuntu 16.04 LTS"){
      Deployment_Node(apache, "Apache Tomcat", "Apache Tomcat 8.x"){
        Container(api, "API Application", "Java and Spring MVC", "Provides Internet Banking functionality via a JSON/HTTPS API.")
      }
    }
      Deployment_Node(bb2, "bigbank-web*** x4", "Ubuntu 16.04 LTS"){
        Deployment_Node(apache2, "Apache Tomcat", "Apache Tomcat 8.x"){
          Container(web, "Web Application", "Java and Spring MVC", "Delivers the static content and the Internet Banking single page application.")
        }
      }
      Deployment_Node(bigbankdb01, "bigbank-db01", "Ubuntu 16.04 LTS"){
        Deployment_Node(oracle, "Oracle - Primary", "Oracle 12c"){
          ContainerDb(db, "Database", "Relational Database Schema", "Stores user registration information, hashed authentication credentials, access logs, etc.")
        }
      }
      Deployment_Node(bigbankdb02, "bigbank-db02", "Ubuntu 16.04 LTS") {
        Deployment_Node(oracle2, "Oracle - Secondary", "Oracle 12c") {
          ContainerDb(db2, "Database", "Relational Database Schema", "Stores user registration information, hashed authentication credentials, access logs, etc.")
        }
      }
  }

  Rel(mobile, api, "Makes API calls to", "json/HTTPS")
  Rel(spa, api, "Makes API calls to", "json/HTTPS")
  Rel_U(web, spa, "Delivers to the customer's web browser")
  Rel(api, db, "Reads from and writes to", "JDBC")
  Rel(api, db2, "Reads from and writes to", "JDBC")
  Rel_R(db, db2, "Replicates data to")

  UpdateRelStyle(spa, api, $offsetY="-40")
  UpdateRelStyle(web, spa, $offsetY="-40")
  UpdateRelStyle(api, db, $offsetY="-20", $offsetX="5")
  UpdateRelStyle(api, db2, $offsetX="-40", $offsetY="-20")
  UpdateRelStyle(db, db2, $offsetY="-10")
```