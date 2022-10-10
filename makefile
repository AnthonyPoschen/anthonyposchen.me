# below link explains the functions
# https://stackoverflow.com/a/10858332
check_defined = \
    $(strip $(foreach 1,$1, \
        $(call __check_defined,$1,$(strip $(value 2)))))
__check_defined = \
    $(if $(value $1),, \
        $(error Undefined $1$(if $2, ($2))$(if $(value @), \
		required by target `$@`)))

.PHONY: deploy
deploy:
	@:$(call check_defined, SAM_BUCKET, this should be your bitbucket access token with read permissions)
	@:$(call check_defined, STACK_NAME, this should be your bitbucket access token with read permissions)
	@:$(call check_defined, ENV, this should be your bitbucket access token with read permissions)
	sam deploy --template-file ./cloudformation.cfn-sam.yaml --stack-name ${STACK_NAME} --s3-bucket ${SAM_BUCKET} --capabilities CAPABILITY_NAMED_IAM
