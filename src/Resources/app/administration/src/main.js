const {Application} = Shopware;

console.log('Hello');

Application.addServiceProviderDecorator('cmsService', cmsService => {
    const decoratedMethod = cmsService.getEntityMappingTypes;
    cmsService.getEntityMappingTypes = function (entityName = null) {
        console.log(entityName);
        return decoratedMethod.call(this, entityName);
    };
    return cmsService;
});
