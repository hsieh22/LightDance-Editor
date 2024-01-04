import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { ControlData } from "../../../models/ControlData";
import { ControlFrame } from "../../../models/ControlFrame";
import { Part } from "../../../models/Part";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ControlData)
export class ControlDataRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Part, {
    nullable: false
  })
  async part(@TypeGraphQL.Root() controlData: ControlData, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Part> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).controlData.findUnique({
      where: {
        partId_frameId: {
          partId: controlData.partId,
          frameId: controlData.frameId,
        },
      },
    }).part({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => ControlFrame, {
    nullable: false
  })
  async frame(@TypeGraphQL.Root() controlData: ControlData, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<ControlFrame> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).controlData.findUnique({
      where: {
        partId_frameId: {
          partId: controlData.partId,
          frameId: controlData.frameId,
        },
      },
    }).frame({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
