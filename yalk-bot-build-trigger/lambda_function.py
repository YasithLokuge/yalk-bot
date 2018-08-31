import boto3

def entrypoint(event, context):
  print('Starting a new build ...')
  cb = boto3.client('codebuild')
  build = {
    'projectName': event['Records'][0]['customData'],
    'sourceVersion': event['Records'][0]['codecommit']['references'][0]['commit']
  }
  print('Starting build for project {0} from commit ID {1}'.format(build['projectName'], build['sourceVersion']))
  cb.start_build(**build)
  print('Successfully launched a new CodeBuild project build!')
