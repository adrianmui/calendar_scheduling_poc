import 'fullcalendar';
import $ from 'jquery';

let fullcalendarScript = (deployments) => {
    console.log('fullcalendarcript');
    let events = [];
    deployments.forEach( (deploy) => {
        let item = {};
        item.title = deploy.DeploymentName;
        item.start = deploy.CreatedDate.replace(' ', 'T');
        events.push(item);
    });

    if ($('#calendar').text().length > 0 ) {
        $('#calendar').empty();
    }

    $('#calendar').fullCalendar({
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'basicDay, basicWeek, month, listWeek'
			},
			// customize the button names,
			// otherwise they'd all just say "list"
			views: {
				listDay: { buttonText: 'list day' },
				listWeek: { buttonText: 'list week' }
			},
			defaultView: 'basicWeek',
			defaultDate: '2017-03-12',
			navLinks: true, // can click day/week names to navigate views
			editable: true,
			eventLimit: true, // allow "more" link when too many events
            contentHeight: 600,
			events: events
		});	
	};

app.controller('CalendarCtrl', ($scope, DeploymentService, DeploymentInfoService) => {
    console.log('CalendarCtrl');
    $scope.deployments = [];
    $scope.deployment;
    $scope.selected;

    // treat this as NgOnInit() in Angular 2
    DeploymentService.$ajaxGetDeployments()
        .then((resp) => {
            console.log('ajaxDeployments done');
            $scope.deployments = DeploymentService.getDeployments();
            fullcalendarScript($scope.deployments);
            $scope.daySelector();
            $scope.$apply();
        });


    // selects and triggers ajax getDepInfo call
    $scope.selectDeployment = ($event, trackId) => {
        var $node = $($event.currentTarget);

        if (!$scope.selected) {
            $scope.selected = $node;
        } else {
            // if selected another $node
            $scope.selected.toggleClass('a123').toggleClass('b123').toggleClass('selected');
            $scope.selected = $node;
        }

        // if ($scope.deployment) {
        //     $scope.deployment = undefined;
        // }

        $scope.selected.toggleClass('a123').toggleClass('b123').toggleClass('selected');

        DeploymentInfoService.$ajaxGetDeploymentInfo(trackId)
            .then((resp) => {
                $scope.deployment = DeploymentInfoService.getDeploymentInfo();
                $scope.$apply();
            }, (err) => {
                console.log(err.status, err.statusText);
            })
    };

    // listeners
    $scope.daySelector = () => {
        $('.fc-day.fc-widget-content').on('click', ($event)=> { 
            console.log('ajax call to deployments within single day!');
            
            $($event.target).toggleClass('bg-inverse');
            }    
        );
    }
});