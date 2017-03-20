# OMAIL NOTES

#Search and .Get Deployment or Recurring Deployment
- #form submit(AJAX) for list of deployments
    - selecting a deployment(AJAX) will display CRUD actions, View Summary, Report, repl Url

#.Create Deployment or Recurring Deployment
- create description of deployment
- add OnQ query list
- uses WYSIWYG editor for emails to create email template
    - previous templates can be loaded
    - templates can be saved
    - options to tracked
- add billing info and show available balances

#.Index Calendar
- select from List of every Brand(AJAX) and its Sub-Brand(AJAX)
    - has a Weekly Calendar that has listed Omail Deployments
    - selecting a day(AJAX) will load a list of deployments + description.
        - shows deployment schedule, number of deployments, total recipients
        - selecting a deployment(AJAX) will display CRUD actions, View Summary, Report, repl Url

##.Get Opt-out Settings
    - under brand and subbrand, saves html template response for users who have opted out of the deployment emails.

##.Get View Summary and View Report
    - shows sent audience, clicks, bounces, opens, and unsubscribes.
        - has .Get clicks to alot of different places
    I feel like both they do the same thing

### Questions:
    - What is the difference between Reports and Summary?
    - What is the 'Approval Queue'?
    - Final Approver is the last guy to click confirm for the deployment to activate?
    - Deployment Defaults
        - shows a list of all available recipients under brand.
        - how important are the fields/attributes for these defaults?
        

## answers
** DEPLOYMENT DEFAULTS == AUTOFILL FEATURE
    FOR RECURRING DEPLOYMENTS, IT FOLLOWS DEPLOYMENT DEFAULTS/
        - it does not repeat a single deployment, it creates new deployments over and over again.
    
