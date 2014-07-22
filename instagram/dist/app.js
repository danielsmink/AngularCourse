"use strict";angular.module("instagramSearcher",["ngAnimate"]).constant("VERSION","1.0").run(["VERSION","$rootScope","$templateCache",function(e,a,r){a.version=e,a.$on("$viewContentLoaded",function(){r.removeAll()})}]),angular.module("instagramSearcher").controller("InstagramCtrl",["$scope","$timeout","InstagramSvc",function(e,a,r){e.images=null,e.message=null,e.tag=null,e.results=[];var n=function(){return e.searchForm.$valid?!0:(e.message="Please fill in the search field",!1)};e.findImages=function(){if(n()){var t=e.tag;e.tag=null,e.message='Searching Instagram for: "'+t+'"',r.fetchImages(t).success(function(r){200===r.meta.code?r.data.length>0?(a(function(){e.results=r.data}),e.message="We found "+r.data.length+' results tagged with "'+t+'"'):e.message="Sorry, your search returned no results.":e.message="Oops, you have encountered an error: "+r.meta.error_message}).error(function(){e.message="Oops, you have encountered an error."})}}}]),angular.module("instagramSearcher").factory("InstagramSvc",["$http",function(e){return{fetchImages:function(a){var r={params:{callback:"JSON_CALLBACK",client_id:"a90279b288d5455d8230b396492d1768"}};return e.jsonp("https://api.instagram.com/v1/tags/"+a+"/media/recent",r)}}}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlcyI6WyJtb2R1bGUuanMiLCJpbnN0YWdyYW0vaW5zdGFncmFtLmN0cmwuanMiLCJpbnN0YWdyYW0vaW5zdGFncmFtLnN2Yy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQVFBLFNBQUEsT0FBQSxxQkFBQSxjQUVBLFNBQUEsVUFBQSxPQUNBLEtBQUEsVUFBQSxhQUFBLGlCQUFBLFNBQUEsRUFBQSxFQUFBLEdBQ0EsRUFBQSxRQUFBLEVBRUEsRUFBQSxJQUFBLHFCQUFBLFdBQ0EsRUFBQSxpQkNUQSxRQUFBLE9BQUEscUJBQ0EsV0FBQSxpQkFBQSxTQUFBLFdBQUEsZUFBQSxTQUFBLEVBQUEsRUFBQSxHQUdBLEVBQUEsT0FBQSxLQUNBLEVBQUEsUUFBQSxLQUNBLEVBQUEsSUFBQSxLQUNBLEVBQUEsVUFHQSxJQUFBLEdBQUEsV0FDQSxNQUFBLEdBQUEsV0FBQSxRQUNBLEdBR0EsRUFBQSxRQUFBLG1DQUVBLEdBSUEsR0FBQSxXQUFBLFdBRUEsR0FBQSxJQUFBLENBR0EsR0FBQSxHQUFBLEVBQUEsR0FDQSxHQUFBLElBQUEsS0FHQSxFQUFBLFFBQUEsNkJBQUEsRUFBQSxJQUVBLEVBQUEsWUFBQSxHQUNBLFFBQUEsU0FBQSxHQUVBLE1BQUEsRUFBQSxLQUFBLEtBRUEsRUFBQSxLQUFBLE9BQUEsR0FFQSxFQUFBLFdBQ0EsRUFBQSxRQUFBLEVBQUEsT0FFQSxFQUFBLFFBQUEsWUFBQSxFQUFBLEtBQUEsT0FBQSx5QkFBQSxFQUFBLEtBRUEsRUFBQSxRQUFBLDBDQUlBLEVBQUEsUUFBQSx3Q0FBQSxFQUFBLEtBQUEsZ0JBSUEsTUFBQSxXQUNBLEVBQUEsUUFBQSw4Q0NyREEsUUFBQSxPQUFBLHFCQUNBLFFBQUEsZ0JBQUEsUUFBQSxTQUFBLEdBQ0EsT0FDQSxZQUFBLFNBQUEsR0FHQSxHQUFBLElBQ0EsUUFDQSxTQUFBLGdCQUNBLFVBQUEsb0NBS0EsT0FBQSxHQUFBLE1BQUEscUNBQUEsRUFBQSxnQkFBQSIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTaW1wbGUgQW5ndWxhciBpbnN0YWdyYW1TZWFyY2hlciBtb2R1bGVcbiAqXG4gKiBWZXJzaW9uIDEuMFxuICovXG5cbmFuZ3VsYXIubW9kdWxlKCdpbnN0YWdyYW1TZWFyY2hlcicsIFsnbmdBbmltYXRlJ10pXG4gIC8vIFNldCB2ZXJzaW9uXG4gIC5jb25zdGFudCgnVkVSU0lPTicsICcxLjAnKVxuICAucnVuKGZ1bmN0aW9uKFZFUlNJT04sICRyb290U2NvcGUsICR0ZW1wbGF0ZUNhY2hlKXtcbiAgICAkcm9vdFNjb3BlLnZlcnNpb24gPSBWRVJTSU9OO1xuICAgIC8vIEtlZXAgY2FjaGUgY2xlYXJlZCB3aGlsZSBkZXZlbG9waW5nXG4gICAgJHJvb3RTY29wZS4kb24oJyR2aWV3Q29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgJHRlbXBsYXRlQ2FjaGUucmVtb3ZlQWxsKCk7XG4gICAgfSk7XG4gIH0pOyIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDb250cm9sbGVyIHRvIGhhbmRsZSBhcHBsaWNhdGlvbiBsb2dpYyB1c2VzIGFuIGluc3RhZ3JhbSBzZXJ2aWNlIHRvIGNhbGwgdGhlIGluc3RhZ3JhbSBBUElcbiAqL1xuXG5hbmd1bGFyLm1vZHVsZSgnaW5zdGFncmFtU2VhcmNoZXInKVxuICAuY29udHJvbGxlcignSW5zdGFncmFtQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsICR0aW1lb3V0LCBJbnN0YWdyYW1TdmMpIHtcblxuICAgIC8vIEluaXQgZGVmYXVsdCB2YWx1ZXNcbiAgICAkc2NvcGUuaW1hZ2VzID0gbnVsbDtcbiAgICAkc2NvcGUubWVzc2FnZSA9IG51bGw7XG4gICAgJHNjb3BlLnRhZyA9IG51bGw7XG4gICAgJHNjb3BlLnJlc3VsdHMgPSBbXTtcblxuICAgIC8vRm9ybSB2YWxpZGF0aW9uXG4gICAgdmFyIHZhbGlkYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZigkc2NvcGUuc2VhcmNoRm9ybS4kdmFsaWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBGb3JtIGRvZXNuJ3QgdmFsaWRhdGUgc2hvdyBlcnJvciBtZXNzYWdlXG4gICAgICAgICRzY29wZS5tZXNzYWdlID0gJ1BsZWFzZSBmaWxsIGluIHRoZSBzZWFyY2ggZmllbGQnO1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgJHNjb3BlLmZpbmRJbWFnZXMgPSBmdW5jdGlvbiBmaW5kSW1hZ2VzICgpIHtcbiAgICAgIC8vVmFsaWRhdGUgZm9ybVxuICAgICAgaWYodmFsaWRhdGUoKSkge1xuXG4gICAgICAgIC8vIFNldCB2YWx1ZSB0byB0YWcgdmFyaWFibGUgc28gd2UgY2FuIHJlc2V0ICRzY29wZS50YWdcbiAgICAgICAgdmFyIHRhZyA9ICRzY29wZS50YWc7XG4gICAgICAgICRzY29wZS50YWcgPSBudWxsO1xuXG4gICAgICAgIC8vIFNob3cgdGhlIHVzZXIgdGhlIHNlYXJjaCBpcyBiZWluZyBwZXJmb3JtZWRcbiAgICAgICAgJHNjb3BlLm1lc3NhZ2UgPSAnU2VhcmNoaW5nIEluc3RhZ3JhbSBmb3I6IFwiJyArIHRhZyArICdcIic7XG5cbiAgICAgICAgSW5zdGFncmFtU3ZjLmZldGNoSW1hZ2VzKHRhZylcbiAgICAgICAgICAuc3VjY2VzcyhmdW5jdGlvbiAocmVzdWx0cykge1xuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgd2UgaGFkIGEgc3VjY2Vzc2Z1bCBjYWxsIHRvIHRoZSBpbnN0YWdyYW0gQVBJXG4gICAgICAgICAgICBpZihyZXN1bHRzLm1ldGEuY29kZSA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgIC8vIENoZWNrIGlmIHdlIGFjdHVhbGx5IGZvdW5kIHNvbWUgaW1hZ2VzXG4gICAgICAgICAgICAgIGlmIChyZXN1bHRzLmRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIC8vIEZpbGwgcmVzdWx0cyB3aXRoIGEgdGltZW91dCBzbyB0aGUgYW5pbWF0aW9uIGlzIHRyaWdnZXJlZFxuICAgICAgICAgICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgJHNjb3BlLnJlc3VsdHMgPSByZXN1bHRzLmRhdGE7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJHNjb3BlLm1lc3NhZ2UgPSAnV2UgZm91bmQgJyArIHJlc3VsdHMuZGF0YS5sZW5ndGggKyAnIHJlc3VsdHMgdGFnZ2VkIHdpdGggXCInICsgdGFnICsgJ1wiJztcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkc2NvcGUubWVzc2FnZSA9ICdTb3JyeSwgeW91ciBzZWFyY2ggcmV0dXJuZWQgbm8gcmVzdWx0cy4nO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAvLyBBUEkgcmVwb3J0ZWQgYW4gZXJyb3Igc2hvdyBlcnJvciB0byB0aGUgdXNlclxuICAgICAgICAgICAgICAkc2NvcGUubWVzc2FnZSA9ICdPb3BzLCB5b3UgaGF2ZSBlbmNvdW50ZXJlZCBhbiBlcnJvcjogJyArIHJlc3VsdHMubWV0YS5lcnJvcl9tZXNzYWdlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLy8gUHJvbWlzZSBmYWlsZWQgcmV0dXJuIGVycm9yIG1lc3NhZ2VcbiAgICAgICAgICAuZXJyb3IoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJHNjb3BlLm1lc3NhZ2UgPSAnT29wcywgeW91IGhhdmUgZW5jb3VudGVyZWQgYW4gZXJyb3IuJztcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICB9KTsiLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuKiBTaW1wbGUgc2VydmljZSB0byBjYXJlIG9mIGNhbGxzIHRvIEluc3RhZ3JhbVxuKi9cblxuYW5ndWxhci5tb2R1bGUoJ2luc3RhZ3JhbVNlYXJjaGVyJylcbiAgLmZhY3RvcnkoJ0luc3RhZ3JhbVN2YycsIGZ1bmN0aW9uICgkaHR0cCkge1xuICAgIHJldHVybiB7XG4gICAgICBmZXRjaEltYWdlczogZnVuY3Rpb24gKHRhZykge1xuXG4gICAgICAgIC8vIFNldCBjb25maWcgZm9yIHRoZSBKU09OUCBjYWxsXG4gICAgICAgIHZhciBjb25maWcgPSB7XG4gICAgICAgICAgICAncGFyYW1zJzoge1xuICAgICAgICAgICAgICAnY2FsbGJhY2snOiAnSlNPTl9DQUxMQkFDSycsXG4gICAgICAgICAgICAgICdjbGllbnRfaWQnOiAnYTkwMjc5YjI4OGQ1NDU1ZDgyMzBiMzk2NDkyZDE3NjgnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcblxuICAgICAgICAvLyByZXR1cm4gUHJvbWlzZVxuICAgICAgICByZXR1cm4gJGh0dHAuanNvbnAoJ2h0dHBzOi8vYXBpLmluc3RhZ3JhbS5jb20vdjEvdGFncy8nICsgdGFnICsgJy9tZWRpYS9yZWNlbnQnLCBjb25maWcpO1xuICAgICAgfVxuICAgIH07XG4gIH0pOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==